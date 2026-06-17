const modalData = {
  localsend: {
    kicker: "跨设备文件传输",
    title: "LocalSend 适合做什么？",
    body: "它解决的是手机、电脑、平板之间快速传文件的问题。只要设备在同一个局域网里，就能互相发现并发送文件。",
    points: ["手机照片、截图、视频快速传到电脑", "电脑资料发到平板或手机", "不想登录网盘时临时传文件", "局域网内传输更直接，隐私更容易掌控"],
  },
  stirling: {
    kicker: "PDF 本地处理",
    title: "Stirling PDF 适合做什么？",
    body: "它把常见 PDF 操作集中在一个网页里。你已经在本机启动过服务，可以通过 localhost:8080 使用。",
    points: ["合并和拆分 PDF", "压缩大文件，方便上传", "PDF 转图片、Office 或其他格式", "加水印、签名、打码、OCR 识别"],
  },
  rustdesk: {
    kicker: "远程桌面",
    title: "RustDesk 适合做什么？",
    body: "RustDesk 是开源远程控制工具，可以用来远程连接电脑，适合远程协助、设备管理和简单运维。",
    points: ["远程帮朋友或同事处理电脑问题", "在外面连接自己的家里电脑", "开源项目，可自建中继服务器", "适合作为工具导航站里的远程控制分类"],
  },
  ollama: {
    kicker: "本地 AI",
    title: "Ollama 适合做什么？",
    body: "Ollama 可以在本机运行大语言模型，适合学习 AI、写作、代码辅助和离线实验。",
    points: ["本地运行 Llama、Qwen、Mistral 等模型", "学习提示词和本地 AI 应用开发", "配合 Open WebUI 做聊天界面", "隐私数据可以优先在本机测试"],
  },
  openwebui: {
    kicker: "AI 网页界面",
    title: "Open WebUI 适合做什么？",
    body: "Open WebUI 给本地模型提供一个聊天网页界面，体验更接近常见 AI 聊天应用。",
    points: ["管理多个本地模型", "和 Ollama 搭配使用", "适合做本地 AI 助手原型", "可以作为后续 AI 应用项目入口"],
  },
  githubDesktop: {
    kicker: "代码管理",
    title: "GitHub Desktop 适合做什么？",
    body: "GitHub Desktop 可以用图形界面完成提交、推送、拉取，适合刚开始学习 Git 和发布网页作品。",
    points: ["不用记很多命令也能上传项目", "查看每次改了哪些文件", "把本地网页项目发布到 GitHub", "适合新手维护作品集和练习项目"],
  },
  dify: {
    kicker: "AI 应用搭建",
    title: "Dify 适合做什么？",
    body: "Dify 更偏向 AI 应用平台，可以搭建聊天机器人、知识库问答、工作流和 API 服务。",
    points: ["搭建知识库问答", "制作 AI 工作流", "连接不同模型和工具", "适合进阶 AI 应用项目"],
  },
  vscode: {
    kicker: "代码编辑器",
    title: "VS Code 适合做什么？",
    body: "VS Code 是很常用的代码编辑器，适合网页开发、脚本编写、项目管理和插件扩展。",
    points: ["写 HTML、CSS、JavaScript", "安装插件提升开发效率", "配合 Git 管理代码", "适合继续维护这个工具站"],
  },
  localsendGuide: {
    kicker: "安装教程",
    title: "LocalSend 新手安装路线",
    body: "LocalSend 的安装很简单，核心是让手机和电脑处在同一个 Wi-Fi 或局域网里。",
    points: ["电脑端打开 LocalSend 官网或 GitHub Releases 下载 Windows 版本", "手机端在应用商店搜索 LocalSend 并安装", "两台设备连接同一个 Wi-Fi", "打开应用，选择文件，点击附近设备发送"],
  },
  stirlingGuide: {
    kicker: "安装教程",
    title: "Stirling PDF 新手安装路线",
    body: "Stirling PDF 可以用 Java Jar 或 Docker 运行。你电脑上已经准备过 Java，本机运行方式更适合先体验。",
    points: ["先安装 Java", "下载 Stirling PDF 的 Jar 文件", "用 java -jar Stirling-PDF.jar 启动", "浏览器打开 localhost:8080 使用"],
  },
  rustdeskGuide: {
    kicker: "安装教程",
    title: "RustDesk 新手安装路线",
    body: "RustDesk 的普通使用很简单，双方都安装软件后，通过对方 ID 和临时密码连接。",
    points: ["从 RustDesk 官网或 GitHub Releases 下载 Windows 版本", "双方电脑都打开 RustDesk", "让对方提供 ID 和临时密码", "输入后连接，得到授权即可远程控制"],
  },
  ollamaGuide: {
    kicker: "安装教程",
    title: "Ollama 新手安装路线",
    body: "Ollama 适合先用一个小模型体验，确认电脑能跑起来后再尝试更大的模型。",
    points: ["从 ollama.com 下载 Windows 版本", "安装后打开终端", "运行 ollama run qwen2.5:3b 或类似小模型", "模型下载完成后就能在终端聊天"],
  },
  openwebuiGuide: {
    kicker: "安装教程",
    title: "Open WebUI 新手安装路线",
    body: "Open WebUI 通常需要 Docker 或 Python 环境，建议先把 Ollama 跑通，再安装它。",
    points: ["先确认 Ollama 已经能运行模型", "安装 Docker Desktop", "按 Open WebUI 文档运行 Docker 命令", "浏览器打开本地地址进入聊天界面"],
  },
  githubDesktopGuide: {
    kicker: "安装教程",
    title: "GitHub Desktop 发布网页路线",
    body: "这个网站就是用 GitHub Desktop / Git 推到 GitHub，再用 GitHub Pages 发布的。",
    points: ["安装 GitHub Desktop 并登录 GitHub", "把本地项目添加为仓库", "Commit 保存改动", "Push 上传到 GitHub", "在仓库 Settings -> Pages 开启网站发布"],
  },
  difyGuide: {
    kicker: "安装教程",
    title: "Dify 新手安装路线",
    body: "Dify 更适合进阶阶段，通常会用 Docker 部署。建议先熟悉 Ollama、Open WebUI 和 GitHub 后再尝试。",
    points: ["安装 Docker Desktop", "克隆 Dify 官方仓库", "按官方文档启动 docker compose", "浏览器进入本地 Dify 后台创建应用"],
  },
  vscodeGuide: {
    kicker: "安装教程",
    title: "VS Code 新手安装路线",
    body: "VS Code 是维护这个网站最方便的编辑器之一，可以配合 Live Server 插件实时预览网页。",
    points: ["从 VS Code 官网下载安装", "安装 Chinese Language Pack 中文插件", "安装 Live Server 插件", "打开网站项目文件夹，修改后实时预览"],
  },
};

const storageKeys = {
  favorites: "tool-showcase-favorites",
  visits: "tool-showcase-visits",
  toolViews: "tool-showcase-tool-views",
  theme: "tool-showcase-theme",
};

const root = document.documentElement;
const savedTheme = localStorage.getItem(storageKeys.theme);
let tools = [];
let activeFilter = "all";
let favorites = readJson(storageKeys.favorites, []);
let toolViews = readJson(storageKeys.toolViews, {});
let activeTutorialId = "";
let favoriteMessageTimer;

if (savedTheme === "dark") {
  root.dataset.theme = "dark";
}

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function ratingStars(rating) {
  return "★★★★★".slice(0, rating) + "☆☆☆☆☆".slice(0, 5 - rating);
}

function updateThemeIcon() {
  const icon = document.querySelector("[data-theme-icon]");
  if (!icon) return;
  icon.textContent = root.dataset.theme === "dark" ? "亮色" : "暗色";
}

updateThemeIcon();

document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  if (next === "dark") {
    root.dataset.theme = "dark";
    localStorage.setItem(storageKeys.theme, "dark");
  } else {
    delete root.dataset.theme;
    localStorage.setItem(storageKeys.theme, "light");
  }
  updateThemeIcon();
});

const modalRoot = document.querySelector("[data-modal-root]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalBody = document.querySelector("[data-modal-body]");
const modalList = document.querySelector("[data-modal-list]");
const searchInput = document.querySelector("[data-tool-search]");
const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const toolGrid = document.querySelector("[data-tool-grid]");
const downloadPanel = document.querySelector("[data-download-panel]");
const toolCount = document.querySelector("[data-tool-count]");
const emptyState = document.querySelector("[data-empty-state]");
const favoriteCount = document.querySelector("[data-favorite-count]");
const visitCount = document.querySelector("[data-visit-count]");
const totalTools = document.querySelector("[data-total-tools]");
const tutorialList = document.querySelector("[data-tutorial-list]");
const tutorialDetail = document.querySelector("[data-tutorial-detail]");
const popularTools = document.querySelector("[data-popular-tools]");
const exportFavoritesButton = document.querySelector("[data-export-favorites]");
const importFavoritesButton = document.querySelector("[data-import-favorites]");
const importFavoritesFile = document.querySelector("[data-import-favorites-file]");
const favoriteMessage = document.querySelector("[data-favorite-message]");

function showFavoriteMessage(message) {
  if (!favoriteMessage) return;
  favoriteMessage.textContent = message;
  window.clearTimeout(favoriteMessageTimer);
  favoriteMessageTimer = window.setTimeout(() => {
    favoriteMessage.textContent = "";
  }, 3200);
}

function updateToolViewLabels(toolId) {
  document.querySelectorAll("[data-view-count]").forEach((node) => {
    if (node.dataset.viewCount === toolId) {
      node.textContent = String(toolViews[toolId] || 0);
    }
  });
}

function trackToolView(toolId) {
  if (!toolId) return;
  toolViews[toolId] = (toolViews[toolId] || 0) + 1;
  writeJson(storageKeys.toolViews, toolViews);
  updateToolViewLabels(toolId);
  renderPopularTools();
}

function openModal(key, toolId) {
  const data = modalData[key];
  if (!data || !modalRoot || !modalTitle || !modalKicker || !modalBody || !modalList) return;

  trackToolView(toolId);
  modalKicker.textContent = data.kicker;
  modalTitle.textContent = data.title;
  modalBody.textContent = data.body;
  modalList.innerHTML = data.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("");
  modalRoot.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  modalRoot?.setAttribute("hidden", "");
  document.body.classList.remove("modal-open");
}

document.addEventListener("click", (event) => {
  const modalButton = event.target.closest("[data-modal]");
  if (modalButton) {
    openModal(modalButton.dataset.modal, modalButton.dataset.trackTool);
  }

  const favoriteButton = event.target.closest("[data-favorite-toggle]");
  if (favoriteButton) {
    toggleFavorite(favoriteButton.dataset.favoriteToggle);
  }

  const tutorialButton = event.target.closest("[data-tutorial-select]");
  if (tutorialButton) {
    activeTutorialId = tutorialButton.dataset.tutorialSelect || activeTutorialId;
    trackToolView(activeTutorialId);
    renderTutorials();
  }
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

function incrementVisits() {
  const visits = Number(localStorage.getItem(storageKeys.visits) || "0") + 1;
  localStorage.setItem(storageKeys.visits, String(visits));
  if (visitCount) visitCount.textContent = String(visits);
}

function toggleFavorite(toolId) {
  if (!toolId) return;
  const next = new Set(favorites);
  if (next.has(toolId)) {
    next.delete(toolId);
  } else {
    next.add(toolId);
  }
  favorites = Array.from(next);
  writeJson(storageKeys.favorites, favorites);
  renderTools();
  applyToolFilters();
  showFavoriteMessage(next.has(toolId) ? "已加入收藏。" : "已取消收藏。");
}

function renderTools() {
  if (!toolGrid) return;
  const favoriteSet = new Set(favorites);
  toolGrid.innerHTML = tools
    .map((tool) => {
      const isFavorite = favoriteSet.has(tool.id);
      const logo = tool.logo
        ? `<img class="tool-logo" src="${escapeHtml(tool.logo)}" alt="" />`
        : `<span class="tool-logo text-logo">${escapeHtml(tool.textLogo || tool.name.slice(0, 2))}</span>`;
      const tags = [...(tool.tags || []), tool.categoryLabel, tool.difficulty, tool.audience].join(" ");
      return `
        <article class="library-card" data-tool-card data-category="${escapeHtml(tool.category)}" data-name="${escapeHtml(tool.name)}" data-tags="${escapeHtml(tags)}" data-id="${escapeHtml(tool.id)}">
          <button class="favorite-toggle${isFavorite ? " is-favorite" : ""}" type="button" data-favorite-toggle="${escapeHtml(tool.id)}" aria-label="${isFavorite ? "取消收藏" : "收藏"} ${escapeHtml(tool.name)}">${isFavorite ? "已收藏" : "收藏"}</button>
          <div class="library-card-top">
            ${logo}
            <div>
              <span class="tool-badge">${escapeHtml(tool.categoryLabel)}</span>
              <h3>${escapeHtml(tool.name)}</h3>
            </div>
          </div>
          <p>${escapeHtml(tool.summary)}</p>
          <div class="tool-meta">
            <span>推荐 ${ratingStars(tool.rating)}</span>
            <span>难度 ${escapeHtml(tool.difficulty)}</span>
            <span>适合 ${escapeHtml(tool.audience)}</span>
            <span>本机查看 <span class="view-count" data-view-count="${escapeHtml(tool.id)}">${toolViews[tool.id] || 0}</span> 次</span>
          </div>
          <div class="inline-actions">
            <button class="button secondary compact" type="button" data-modal="${escapeHtml(tool.detailModal)}" data-track-tool="${escapeHtml(tool.id)}">详情</button>
            <button class="button secondary compact" type="button" data-modal="${escapeHtml(tool.guideModal)}" data-track-tool="${escapeHtml(tool.id)}">安装教程</button>
          </div>
        </article>
      `;
    })
    .join("");
  if (favoriteCount) favoriteCount.textContent = String(favorites.length);
}

function renderDownloads() {
  if (!downloadPanel) return;
  downloadPanel.innerHTML = tools
    .map((tool) => {
      const links = (tool.links || [])
        .slice(0, 3)
        .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(link.label)}</a>`)
        .join("");
      return `
        <div class="download-row">
          <div>
            <strong>${escapeHtml(tool.name)}</strong>
            <span>${escapeHtml(tool.summary)}</span>
          </div>
          ${links}
        </div>
      `;
    })
    .join("");
}

function getGuideData(tool) {
  return modalData[tool.guideModal] || {
    kicker: "安装教程",
    title: `${tool.name} 新手教程`,
    body: tool.summary,
    points: ["打开官网或文档", "下载适合自己系统的版本", "按官方说明完成安装", "回到工具库记录使用体验"],
  };
}

function renderTutorials() {
  if (!tutorialList || !tutorialDetail) return;
  if (!tools.length) {
    tutorialList.innerHTML = "";
    tutorialDetail.innerHTML = '<p class="empty-state">教程数据加载中。</p>';
    return;
  }

  const selectedTool = tools.find((tool) => tool.id === activeTutorialId) || tools[0];
  activeTutorialId = selectedTool.id;
  const guide = getGuideData(selectedTool);
  const primaryLink = selectedTool.links?.[0];

  tutorialList.innerHTML = tools
    .map((tool) => {
      const isActive = tool.id === activeTutorialId;
      return `
        <button class="tutorial-tab${isActive ? " is-active" : ""}" type="button" data-tutorial-select="${escapeHtml(tool.id)}" aria-pressed="${String(isActive)}">
          <span>${escapeHtml(tool.categoryLabel)}</span>
          <strong>${escapeHtml(tool.name)}</strong>
        </button>
      `;
    })
    .join("");

  tutorialDetail.innerHTML = `
    <p class="eyebrow">${escapeHtml(guide.kicker)}</p>
    <h3>${escapeHtml(guide.title)}</h3>
    <p>${escapeHtml(guide.body)}</p>
    <ol class="tutorial-steps">
      ${guide.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
    </ol>
    <div class="tutorial-meta">
      <span>难度：${escapeHtml(selectedTool.difficulty)}</span>
      <span>适合：${escapeHtml(selectedTool.audience)}</span>
      <span>本机查看：<span class="view-count" data-view-count="${escapeHtml(selectedTool.id)}">${toolViews[selectedTool.id] || 0}</span> 次</span>
    </div>
    <div class="inline-actions">
      <button class="button primary compact" type="button" data-modal="${escapeHtml(selectedTool.guideModal)}" data-track-tool="${escapeHtml(selectedTool.id)}">打开教程弹窗</button>
      ${
        primaryLink
          ? `<a class="button secondary compact" href="${escapeHtml(primaryLink.url)}" target="_blank" rel="noreferrer">访问${escapeHtml(primaryLink.label)}</a>`
          : ""
      }
    </div>
  `;
}

function renderPopularTools() {
  if (!popularTools) return;
  const rankedTools = [...tools]
    .map((tool) => ({ ...tool, views: toolViews[tool.id] || 0 }))
    .sort((a, b) => b.views - a.views || b.rating - a.rating || a.name.localeCompare(b.name, "zh-CN"))
    .slice(0, 5);

  if (!rankedTools.length) {
    popularTools.innerHTML = '<p class="empty-state">工具数据加载中。</p>';
    return;
  }

  const hasViews = rankedTools.some((tool) => tool.views > 0);
  popularTools.innerHTML = `
    ${!hasViews ? '<p class="popular-note">还没有查看记录，先点几个工具详情或教程，排行会自动变化。</p>' : ""}
    ${rankedTools
      .map(
        (tool, index) => `
          <article class="popular-row">
            <span class="popular-rank">${String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>${escapeHtml(tool.name)}</strong>
              <span>${escapeHtml(tool.categoryLabel)} · 推荐 ${ratingStars(tool.rating)} · 查看 <span class="view-count" data-view-count="${escapeHtml(tool.id)}">${tool.views}</span> 次</span>
            </div>
            <button class="button secondary compact" type="button" data-modal="${escapeHtml(tool.detailModal)}" data-track-tool="${escapeHtml(tool.id)}">详情</button>
          </article>
        `,
      )
      .join("")}
  `;
}

function exportFavorites() {
  const favoriteSet = new Set(favorites);
  const favoriteTools = tools
    .filter((tool) => favoriteSet.has(tool.id))
    .map((tool) => ({
      id: tool.id,
      name: tool.name,
      category: tool.category,
      summary: tool.summary,
    }));
  const payload = {
    app: "Local Tool Showcase",
    exportedAt: new Date().toISOString(),
    favorites,
    tools: favoriteTools,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "tool-favorites.json";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(link.href);
  showFavoriteMessage(favorites.length ? `已导出 ${favorites.length} 个收藏。` : "当前没有收藏，也已导出空收藏文件。");
}

function importFavorites(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const data = JSON.parse(String(reader.result || "{}"));
      const imported = Array.isArray(data) ? data : data.favorites;
      if (!Array.isArray(imported)) throw new Error("favorites not found");
      const validIds = new Set(tools.map((tool) => tool.id));
      favorites = Array.from(new Set(imported.filter((id) => validIds.has(id))));
      writeJson(storageKeys.favorites, favorites);
      renderTools();
      applyToolFilters();
      showFavoriteMessage(`已导入 ${favorites.length} 个有效收藏。`);
    } catch {
      showFavoriteMessage("导入失败，请选择之前导出的 JSON 文件。");
    }
  });
  reader.readAsText(file, "utf-8");
}

function applyToolFilters() {
  const cards = Array.from(document.querySelectorAll("[data-tool-card]"));
  const query = normalize(searchInput?.value || "");
  const favoriteSet = new Set(favorites);
  let visibleCount = 0;

  cards.forEach((card) => {
    const category = card.dataset.category || "";
    const toolId = card.dataset.id || "";
    const haystack = normalize(`${card.dataset.name || ""} ${card.dataset.tags || ""} ${card.textContent || ""}`);
    const matchesCategory =
      activeFilter === "all" ||
      category === activeFilter ||
      (activeFilter === "favorites" && favoriteSet.has(toolId));
    const matchesQuery = !query || haystack.includes(query);
    const visible = matchesCategory && matchesQuery;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  if (toolCount) toolCount.textContent = String(visibleCount);
  if (emptyState) emptyState.hidden = visibleCount !== 0;
}

searchInput?.addEventListener("input", applyToolFilters);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter || "all";
    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    applyToolFilters();
  });
});

exportFavoritesButton?.addEventListener("click", exportFavorites);

importFavoritesButton?.addEventListener("click", () => {
  importFavoritesFile?.click();
});

importFavoritesFile?.addEventListener("change", () => {
  importFavorites(importFavoritesFile.files?.[0]);
  importFavoritesFile.value = "";
});

async function loadTools() {
  try {
    const response = await fetch("./tools.json");
    if (!response.ok) throw new Error("tools.json load failed");
    tools = await response.json();
  } catch {
    tools = [];
    if (emptyState) {
      emptyState.hidden = false;
      emptyState.textContent = "工具数据加载失败，请确认 tools.json 是否存在。";
    }
  }

  if (totalTools) totalTools.textContent = `${tools.length} 个`;
  if (!activeTutorialId && tools[0]) activeTutorialId = tools[0].id;
  renderTools();
  renderDownloads();
  renderTutorials();
  renderPopularTools();
  applyToolFilters();
}

incrementVisits();
loadTools();
