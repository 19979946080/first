const modalData = {
  localsend: {
    kicker: "跨设备文件传输",
    title: "LocalSend 适合做什么？",
    body: "它解决的是手机、电脑、平板之间快速传文件的问题。只要设备在同一个局域网里，就能互相发现并发送文件。",
    points: [
      "手机照片、截图、视频快速传到电脑",
      "电脑资料发到平板或手机",
      "不想登录网盘时临时传文件",
      "局域网内传输更直接，隐私更容易掌控",
    ],
  },
  stirling: {
    kicker: "PDF 本地处理",
    title: "Stirling PDF 适合做什么？",
    body: "它把常见 PDF 操作集中在一个网页里。你已经在本机启动过服务，可以通过 localhost:8080 使用。",
    points: [
      "合并和拆分 PDF",
      "压缩大文件，方便上传",
      "PDF 转图片、Office 或其他格式",
      "加水印、签名、打码、OCR 识别",
    ],
  },
  rustdesk: {
    kicker: "远程桌面",
    title: "RustDesk 适合做什么？",
    body: "RustDesk 是开源远程控制工具，可以用来远程连接电脑，适合远程协助、设备管理和简单运维。",
    points: [
      "远程帮朋友或同事处理电脑问题",
      "在外面连接自己的家里电脑",
      "开源项目，可自建中继服务器",
      "适合作为工具导航站里的远程控制分类",
    ],
  },
  ollama: {
    kicker: "本地 AI",
    title: "Ollama 适合做什么？",
    body: "Ollama 可以在本机运行大语言模型，适合学习 AI、写作、代码辅助和离线实验。",
    points: [
      "本地运行 Llama、Qwen、Mistral 等模型",
      "学习提示词和本地 AI 应用开发",
      "配合 Open WebUI 做聊天界面",
      "隐私数据可以优先在本机测试",
    ],
  },
  openwebui: {
    kicker: "AI 网页界面",
    title: "Open WebUI 适合做什么？",
    body: "Open WebUI 给本地模型提供一个聊天网页界面，体验更接近常见 AI 聊天应用。",
    points: [
      "管理多个本地模型",
      "和 Ollama 搭配使用",
      "适合做本地 AI 助手原型",
      "可以作为后续 AI 应用项目入口",
    ],
  },
  githubDesktop: {
    kicker: "代码管理",
    title: "GitHub Desktop 适合做什么？",
    body: "GitHub Desktop 可以用图形界面完成提交、推送、拉取，适合刚开始学习 Git 和发布网页作品。",
    points: [
      "不用记很多命令也能上传项目",
      "查看每次改了哪些文件",
      "把本地网页项目发布到 GitHub",
      "适合新手维护作品集和练习项目",
    ],
  },
};

const root = document.documentElement;
const savedTheme = localStorage.getItem("tool-showcase-theme");

if (savedTheme === "dark") {
  root.dataset.theme = "dark";
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
    localStorage.setItem("tool-showcase-theme", "dark");
  } else {
    delete root.dataset.theme;
    localStorage.setItem("tool-showcase-theme", "light");
  }
  updateThemeIcon();
});

const modalRoot = document.querySelector("[data-modal-root]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalKicker = document.querySelector("[data-modal-kicker]");
const modalBody = document.querySelector("[data-modal-body]");
const modalList = document.querySelector("[data-modal-list]");

function openModal(key) {
  const data = modalData[key];
  if (!data || !modalRoot || !modalTitle || !modalKicker || !modalBody || !modalList) return;

  modalKicker.textContent = data.kicker;
  modalTitle.textContent = data.title;
  modalBody.textContent = data.body;
  modalList.innerHTML = data.points.map((point) => `<li>${point}</li>`).join("");
  modalRoot.hidden = false;
  document.body.classList.add("modal-open");
}

function closeModal() {
  modalRoot?.setAttribute("hidden", "");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.modal));
});

document.querySelectorAll("[data-modal-close]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});
