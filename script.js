const copy = {
  zh: {
    status: "周二至周日开放 10:00 - 19:00",
    location: "上海",
    openingTimes: "开放时间",
    navWhatsOn: "当前展览",
    navAbout: "关于",
    navPlanVisit: "参观计划",
    navTicketInfo: "票务信息",
    navShop: "商店",
    navArtists: "商店",
    navVisit: "参观计划",
    navContact: "联系",
    heroKicker: "当前展览",
    heroPrimary: "了解更多",
    heroSecondary: "计划参观",
    footerLine: "nobody is somebody",
  },
  en: {
    status: "Open Tuesday - Sunday, 10:00 - 19:00",
    location: "Shanghai",
    openingTimes: "Opening times",
    navWhatsOn: "What's on",
    navAbout: "About",
    navPlanVisit: "Plan your visit",
    navTicketInfo: "Ticket Info",
    navShop: "Shop",
    navArtists: "Shop",
    navVisit: "Plan your visit",
    navContact: "Contact",
    heroKicker: "What's on",
    heroPrimary: "More info",
    heroSecondary: "Plan your visit",
    footerLine: "nobody is somebody",
  },
  de: {
    status: "Di - So geoeffnet, 10:00 - 19:00",
    location: "Shanghai",
    openingTimes: "Opening times",
    navWhatsOn: "What's on",
    navAbout: "About",
    navPlanVisit: "Plan your visit",
    navTicketInfo: "Ticket Info",
    navShop: "Shop",
    navArtists: "Shop",
    navVisit: "Plan your visit",
    navContact: "Contact",
    heroKicker: "What's on",
    heroPrimary: "More info",
    heroSecondary: "Plan your visit",
    footerLine: "nobody is somebody",
  },
};

const html = document.documentElement;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const langButtons = document.querySelectorAll("[data-lang]");

function setLanguage(lang) {
  const dictionary = copy[lang] || copy.zh;
  html.lang = lang === "zh" ? "zh-CN" : lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = dictionary[key] || copy.zh[key] || "";
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  localStorage.setItem("nobody-gallery-lang", lang);
}

function getPath(source, path) {
  return path.split(".").reduce((value, key) => {
    if (value && Object.prototype.hasOwnProperty.call(value, key)) {
      return value[key];
    }
    return undefined;
  }, source);
}

function publicUrl(url) {
  if (!url || url.startsWith("http") || url.startsWith("mailto:") || url.startsWith("/")) {
    return url;
  }
  return `/${url.replace(/^\.\//, "")}`;
}

function applyContent(data) {
  document.querySelectorAll("[data-content]").forEach((node) => {
    const value = getPath(data, node.dataset.content);
    if (typeof value === "string") {
      node.textContent = value;
    }
  });

  document.querySelectorAll("[data-content-html]").forEach((node) => {
    const value = getPath(data, node.dataset.contentHtml);
    if (typeof value === "string") {
      node.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-content-attr]").forEach((node) => {
    const [path, attr] = node.dataset.contentAttr.split(":");
    const value = getPath(data, path);
    if (typeof value === "string" && attr) {
      node.setAttribute(attr, attr === "src" || attr === "href" ? publicUrl(value) : value);
    }
  });
}

function renderProgrammeCard(item) {
  const imageMarkup = item.image
    ? `<img src="${publicUrl(item.image)}" alt="${item.imageAlt || item.title}" />`
    : `<span>${item.placeholder || "Programme"}</span>`;
  const imageClass = item.image ? "visual-card-media image-slot" : "visual-card-media";
  const admission = item.admission ? `<p class="admission"><strong>参观：</strong>${item.admission}</p>` : "";

  return `
    <article class="programme-card">
      <a class="${imageClass}" href="${publicUrl(item.url)}">
        ${imageMarkup}
      </a>
      <div>
        <p class="programme-type">${item.type || ""}</p>
        <h3>${item.title || ""}</h3>
        <p>${item.meta || ""}</p>
        <p class="description">${item.description || ""}</p>
        ${admission}
        <div class="card-actions">
          <a class="button" href="${publicUrl(item.url)}">${item.buttonLabel || "了解更多"}</a>
        </div>
      </div>
    </article>
  `;
}

function renderProgrammeLists(data) {
  const programmes = data.programmes || {};
  document.querySelectorAll("[data-programme-list]").forEach((node) => {
    const listName = node.dataset.programmeList;
    const items = listName === "home-now" ? (programmes.now || []).slice(0, 2) : programmes[listName] || [];
    if (items.length) {
      node.innerHTML = items.map(renderProgrammeCard).join("");
    }
  });
}

async function loadEditableContent() {
  try {
    const response = await fetch("/content/site.json", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    applyContent(data);
    renderProgrammeLists(data);
  } catch (error) {
    console.warn("Editable content could not be loaded.", error);
  }
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const mailForm = document.querySelector(".mail-form");
if (mailForm) {
  mailForm.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  });
}

setLanguage("zh");
loadEditableContent();
