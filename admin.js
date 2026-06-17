const state = {
  tools: [],
  activeId: "",
  query: "",
  isNew: false,
};

const toolList = document.querySelector("[data-tool-list]");
const form = document.querySelector("[data-tool-form]");
const formTitle = document.querySelector("[data-form-title]");
const statusText = document.querySelector("[data-status]");
const totalTools = document.querySelector("[data-total-tools]");
const currentId = document.querySelector("[data-current-id]");
const searchInput = document.querySelector("[data-search]");
const newToolButton = document.querySelector("[data-new-tool]");
const deleteToolButton = document.querySelector("[data-delete-tool]");
const duplicateToolButton = document.querySelector("[data-duplicate-tool]");
const addLinkButton = document.querySelector("[data-add-link]");
const linkList = document.querySelector("[data-link-list]");

let statusTimer;

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setStatus(message, isError = false) {
  window.clearTimeout(statusTimer);
  statusText.textContent = message;
  statusText.style.color = isError ? "#c23b3b" : "";
  if (message) {
    statusTimer = window.setTimeout(() => {
      statusText.textContent = "";
      statusText.style.color = "";
    }, 3600);
  }
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || "请求失败");
  return data;
}

function makeBlankTool() {
  return {
    id: "",
    name: "",
    category: "",
    categoryLabel: "",
    textLogo: "",
    logo: "",
    summary: "",
    rating: 4,
    difficulty: "简单",
    audience: "",
    tags: [],
    detailModal: "",
    guideModal: "",
    links: [{ label: "官网", url: "" }],
  };
}

function getActiveTool() {
  return state.tools.find((tool) => tool.id === state.activeId) || state.tools[0] || makeBlankTool();
}

function renderToolList() {
  const query = normalize(state.query);
  const filteredTools = state.tools.filter((tool) => {
    const haystack = normalize(
      `${tool.name} ${tool.id} ${tool.categoryLabel} ${tool.category} ${(tool.tags || []).join(" ")}`,
    );
    return !query || haystack.includes(query);
  });

  if (totalTools) totalTools.textContent = String(state.tools.length);
  if (currentId) currentId.textContent = state.isNew ? "新建" : state.activeId || "-";

  toolList.innerHTML = filteredTools.length
    ? filteredTools
        .map(
          (tool) => `
            <button class="tool-item${tool.id === state.activeId && !state.isNew ? " is-active" : ""}" type="button" data-select-tool="${escapeHtml(tool.id)}">
              <strong>${escapeHtml(tool.name)}</strong>
              <span>${escapeHtml(tool.categoryLabel)} · ${escapeHtml(tool.id)}</span>
            </button>
          `,
        )
        .join("")
    : '<p class="tool-item">没有匹配的工具</p>';
}

function renderLinks(links = []) {
  linkList.innerHTML = links
    .map(
      (link, index) => `
        <div class="link-row" data-link-row>
          <input data-link-label value="${escapeHtml(link.label)}" placeholder="链接名称，例如 官网" />
          <input data-link-url value="${escapeHtml(link.url)}" placeholder="https://..." />
          <button class="button danger" type="button" data-remove-link="${index}">删除</button>
        </div>
      `,
    )
    .join("");
}

function fillForm(tool) {
  form.elements.id.value = tool.id || "";
  form.elements.name.value = tool.name || "";
  form.elements.category.value = tool.category || "";
  form.elements.categoryLabel.value = tool.categoryLabel || "";
  form.elements.rating.value = tool.rating || 4;
  form.elements.difficulty.value = tool.difficulty || "简单";
  form.elements.audience.value = tool.audience || "";
  form.elements.textLogo.value = tool.textLogo || "";
  form.elements.logo.value = tool.logo || "";
  form.elements.summary.value = tool.summary || "";
  form.elements.tags.value = (tool.tags || []).join(", ");
  form.elements.detailModal.value = tool.detailModal || "";
  form.elements.guideModal.value = tool.guideModal || "";
  renderLinks(tool.links?.length ? tool.links : [{ label: "官网", url: "" }]);

  formTitle.textContent = state.isNew ? "新建工具" : `编辑 ${tool.name || "工具"}`;
  deleteToolButton.disabled = state.isNew || !state.activeId;
  duplicateToolButton.disabled = state.isNew || !state.activeId;
}

function collectFormTool() {
  const tags = form.elements.tags.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  const links = Array.from(document.querySelectorAll("[data-link-row]"))
    .map((row) => ({
      label: row.querySelector("[data-link-label]").value.trim(),
      url: row.querySelector("[data-link-url]").value.trim(),
    }))
    .filter((link) => link.label && link.url);

  const tool = {
    id: form.elements.id.value.trim(),
    name: form.elements.name.value.trim(),
    category: form.elements.category.value.trim(),
    categoryLabel: form.elements.categoryLabel.value.trim(),
    logo: form.elements.logo.value.trim(),
    textLogo: form.elements.textLogo.value.trim(),
    summary: form.elements.summary.value.trim(),
    rating: Number(form.elements.rating.value),
    difficulty: form.elements.difficulty.value,
    audience: form.elements.audience.value.trim(),
    tags,
    detailModal: form.elements.detailModal.value.trim(),
    guideModal: form.elements.guideModal.value.trim(),
    links,
  };

  if (!tool.detailModal) tool.detailModal = tool.id;
  if (!tool.guideModal) tool.guideModal = `${tool.id}Guide`;
  return tool;
}

function selectTool(id) {
  state.activeId = id;
  state.isNew = false;
  renderToolList();
  fillForm(getActiveTool());
  setStatus("");
}

async function loadTools() {
  const data = await requestJson("/api/tools");
  state.tools = data.tools || [];
  if (!state.activeId && state.tools[0]) state.activeId = state.tools[0].id;
  state.isNew = false;
  renderToolList();
  fillForm(getActiveTool());
}

function startNewTool() {
  state.isNew = true;
  state.activeId = "";
  renderToolList();
  fillForm(makeBlankTool());
  form.elements.id.focus();
}

async function saveTool(event) {
  event.preventDefault();
  const tool = collectFormTool();
  try {
    const data = state.isNew
      ? await requestJson("/api/tools", { method: "POST", body: JSON.stringify(tool) })
      : await requestJson(`/api/tools/${encodeURIComponent(state.activeId)}`, {
          method: "PUT",
          body: JSON.stringify(tool),
        });
    state.tools = data.tools;
    state.activeId = data.tool.id;
    state.isNew = false;
    renderToolList();
    fillForm(data.tool);
    setStatus("已保存到 tools.json。");
  } catch (error) {
    setStatus(error.message, true);
  }
}

async function deleteTool() {
  if (state.isNew || !state.activeId) return;
  const tool = getActiveTool();
  if (!window.confirm(`确定删除 ${tool.name} 吗？`)) return;

  try {
    const data = await requestJson(`/api/tools/${encodeURIComponent(state.activeId)}`, { method: "DELETE" });
    state.tools = data.tools;
    state.activeId = state.tools[0]?.id || "";
    state.isNew = false;
    renderToolList();
    fillForm(getActiveTool());
    setStatus("已删除并保存。");
  } catch (error) {
    setStatus(error.message, true);
  }
}

function duplicateTool() {
  if (state.isNew || !state.activeId) return;
  const source = getActiveTool();
  const copy = {
    ...source,
    id: `${source.id}-copy`,
    name: `${source.name} Copy`,
    detailModal: `${source.detailModal || source.id}Copy`,
    guideModal: `${source.guideModal || `${source.id}Guide`}Copy`,
    links: [...(source.links || [])],
    tags: [...(source.tags || [])],
  };
  state.isNew = true;
  state.activeId = "";
  renderToolList();
  fillForm(copy);
  form.elements.id.focus();
  setStatus("已复制为新工具，修改 ID 后保存。");
}

function addLink() {
  const rows = Array.from(document.querySelectorAll("[data-link-row]")).map((row) => ({
    label: row.querySelector("[data-link-label]").value,
    url: row.querySelector("[data-link-url]").value,
  }));
  rows.push({ label: "", url: "" });
  renderLinks(rows);
}

toolList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-select-tool]");
  if (button) selectTool(button.dataset.selectTool);
});

linkList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-link]");
  if (!button) return;
  const rows = Array.from(document.querySelectorAll("[data-link-row]")).map((row) => ({
    label: row.querySelector("[data-link-label]").value,
    url: row.querySelector("[data-link-url]").value,
  }));
  rows.splice(Number(button.dataset.removeLink), 1);
  renderLinks(rows.length ? rows : [{ label: "", url: "" }]);
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  renderToolList();
});

newToolButton.addEventListener("click", startNewTool);
deleteToolButton.addEventListener("click", deleteTool);
duplicateToolButton.addEventListener("click", duplicateTool);
addLinkButton.addEventListener("click", addLink);
form.addEventListener("submit", saveTool);

loadTools().catch((error) => {
  setStatus(`后台加载失败：${error.message}。请用 node local-admin-server.js 启动。`, true);
});
