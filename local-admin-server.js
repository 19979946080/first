const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const { URL } = require("url");

const rootDir = __dirname;
const toolsPath = path.join(rootDir, "tools.json");
const port = Number(process.env.PORT || 5178);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

function sendJson(response, statusCode, data) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(data));
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body is too large"));
        request.destroy();
      }
    });
    request.on("end", () => resolve(body));
    request.on("error", reject);
  });
}

async function readTools() {
  return JSON.parse(await fs.readFile(toolsPath, "utf8"));
}

async function writeTools(tools) {
  await fs.writeFile(toolsPath, `${JSON.stringify(tools, null, 2)}\n`, "utf8");
}

function normalizeTool(input) {
  const tool = input && typeof input === "object" ? input : {};
  const id = String(tool.id || "").trim();
  const name = String(tool.name || "").trim();
  const category = String(tool.category || "").trim();
  const categoryLabel = String(tool.categoryLabel || "").trim();
  const summary = String(tool.summary || "").trim();

  if (!/^[a-z0-9-]+$/.test(id)) {
    throw new Error("工具 ID 只能使用小写英文、数字和短横线");
  }
  if (!name || !category || !categoryLabel || !summary) {
    throw new Error("名称、分类、分类名称和简介不能为空");
  }

  const normalized = {
    id,
    name,
    category,
    categoryLabel,
    summary,
    rating: Math.min(5, Math.max(1, Number(tool.rating) || 3)),
    difficulty: String(tool.difficulty || "简单").trim(),
    audience: String(tool.audience || "新手").trim(),
    tags: Array.isArray(tool.tags)
      ? tool.tags.map((tag) => String(tag).trim()).filter(Boolean)
      : [],
    detailModal: String(tool.detailModal || id).trim(),
    guideModal: String(tool.guideModal || `${id}Guide`).trim(),
    links: Array.isArray(tool.links)
      ? tool.links
          .map((link) => ({
            label: String(link?.label || "").trim(),
            url: String(link?.url || "").trim(),
          }))
          .filter((link) => link.label && link.url)
      : [],
  };

  const logo = String(tool.logo || "").trim();
  const textLogo = String(tool.textLogo || "").trim();
  if (logo) {
    normalized.logo = logo;
  } else if (textLogo) {
    normalized.textLogo = textLogo.slice(0, 4).toUpperCase();
  } else {
    normalized.textLogo = name.slice(0, 2).toUpperCase();
  }

  return normalized;
}

async function handleApi(request, response, pathname) {
  if (pathname === "/api/tools" && request.method === "GET") {
    sendJson(response, 200, { tools: await readTools() });
    return;
  }

  if (pathname === "/api/tools" && request.method === "POST") {
    const payload = JSON.parse(await readBody(request));
    const nextTool = normalizeTool(payload);
    const tools = await readTools();
    if (tools.some((tool) => tool.id === nextTool.id)) {
      throw new Error("这个工具 ID 已经存在");
    }
    tools.push(nextTool);
    await writeTools(tools);
    sendJson(response, 201, { tools, tool: nextTool });
    return;
  }

  const idMatch = pathname.match(/^\/api\/tools\/([a-z0-9-]+)$/);
  if (idMatch && request.method === "PUT") {
    const originalId = idMatch[1];
    const payload = JSON.parse(await readBody(request));
    const nextTool = normalizeTool(payload);
    const tools = await readTools();
    const index = tools.findIndex((tool) => tool.id === originalId);
    if (index === -1) throw new Error("没有找到这个工具");
    if (nextTool.id !== originalId && tools.some((tool) => tool.id === nextTool.id)) {
      throw new Error("新的工具 ID 已经存在");
    }
    tools[index] = nextTool;
    await writeTools(tools);
    sendJson(response, 200, { tools, tool: nextTool });
    return;
  }

  if (idMatch && request.method === "DELETE") {
    const id = idMatch[1];
    const tools = await readTools();
    const nextTools = tools.filter((tool) => tool.id !== id);
    if (nextTools.length === tools.length) throw new Error("没有找到这个工具");
    await writeTools(nextTools);
    sendJson(response, 200, { tools: nextTools });
    return;
  }

  sendJson(response, 404, { error: "接口不存在" });
}

async function serveStatic(response, pathname) {
  const requestPath = pathname === "/" ? "/index.html" : pathname;
  const decodedPath = decodeURIComponent(requestPath);
  const filePath = path.resolve(rootDir, `.${decodedPath}`);
  const relativePath = path.relative(rootDir, filePath);

  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  const file = await fs.readFile(filePath);
  response.writeHead(200, {
    "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    "Cache-Control": "no-store",
  });
  response.end(file);
}

const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    if (url.pathname.startsWith("/api/")) {
      await handleApi(request, response, url.pathname);
      return;
    }
    await serveStatic(response, url.pathname);
  } catch (error) {
    if (error.code === "ENOENT") {
      response.writeHead(404);
      response.end("Not found");
      return;
    }
    sendJson(response, 400, { error: error.message || "请求失败" });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Local admin server running at http://127.0.0.1:${port}`);
  console.log(`Admin page: http://127.0.0.1:${port}/admin.html`);
});
