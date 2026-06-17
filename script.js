const modalData = {
  localsend: {
    kicker: "跨设备文件传输",
    title: "LocalSend 适合做什么？",
    body: "它解决的是手机、电脑、平板之间快速传文件的问题。只要设备在同一个局域网里，就能互相发现并发送文件。",
    points: ["手机照片传电脑", "电脑资料发到平板", "不想登录网盘时临时传文件", "局域网内速度更稳定"],
  },
  stirling: {
    kicker: "PDF 本地处理",
    title: "Stirling PDF 适合做什么？",
    body: "它把常见 PDF 操作集中在一个网页里。你已经在本机启动了服务，可以直接通过 localhost:8080 使用。",
    points: ["合并和拆分 PDF", "压缩大文件", "PDF 转图片或 Office 格式", "加水印、签名、打码、OCR"],
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
  icon.textContent = root.dataset.theme === "dark" ? "日" : "月";
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
