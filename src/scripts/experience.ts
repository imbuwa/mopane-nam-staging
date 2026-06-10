const body = document.body;
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
if (hasFinePointer) {
  document.documentElement.style.cursor = "none";
  body.style.cursor = "none";
}

const menuButton = document.querySelector<HTMLButtonElement>("[data-menu-button]");
const menuOverlay = document.querySelector<HTMLElement>("[data-menu-overlay]");
const slides = Array.from(document.querySelectorAll<HTMLElement>("[data-slide]"));
const prevButton = document.querySelector<HTMLButtonElement>("[data-slide-prev]");
const nextButton = document.querySelector<HTMLButtonElement>("[data-slide-next]");
const stagePrompt = document.querySelector<HTMLButtonElement>("[data-stage-prompt]");
const promptLabel = document.querySelector<HTMLElement>("[data-prompt-label]");
const cursorRing = document.querySelector<HTMLElement>("[data-cursor-ring]");
const menuLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-menu-target]"));
const menuVisuals = Array.from(document.querySelectorAll<HTMLImageElement>("[data-menu-visual]"));
const menuDetailGroups = Array.from(document.querySelectorAll<HTMLElement>(".menu-details div"));
const stage = document.querySelector<HTMLElement>("[data-stage]");
const promptLabels = ["Scroll", "Explore Partner", "Why Mopane", "Read Insights", "Start Conversation"];
const promptAriaLabels = [
  "Scroll to services slide",
  "Scroll to why us slide",
  "Scroll to insights slide",
  "Scroll to contact slide",
  "Return to welcome slide",
];
const hasStage = Boolean(stage && slides.length);

let activeSlide = 0;
let isAnimating = false;
let touchStartY = 0;
let cursorX = window.innerWidth / 2;
let cursorY = window.innerHeight / 2;
let cursorTargetX = cursorX;
let cursorTargetY = cursorY;

function splitText(element: Element) {
  const text = element.textContent || "";
  element.textContent = "";
  Array.from(text).forEach((character, index) => {
    const span = document.createElement("span");
    span.className = "char";
    span.style.setProperty("--char-index", String(index));
    span.innerHTML = character === " " ? "&nbsp;" : character;
    element.appendChild(span);
  });
}

document.querySelectorAll("[data-split]").forEach(splitText);
menuLinks.forEach((link, index) => link.style.setProperty("--menu-index", String(index)));
menuDetailGroups.forEach((group, index) => group.style.setProperty("--detail-index", String(index)));

function updateSlideAccessibility() {
  slides.forEach((slide, index) => {
    const isActive = index === activeSlide;
    slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    if (isActive) {
      slide.removeAttribute("inert");
    } else {
      slide.setAttribute("inert", "");
    }
  });
}

function openMenu() {
  body.classList.add("menu-open");
  menuOverlay?.classList.add("is-open");
  menuOverlay?.setAttribute("aria-hidden", "false");
  menuOverlay?.removeAttribute("inert");
  menuButton?.setAttribute("aria-label", "Close menu");
  menuButton?.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  body.classList.remove("menu-open");
  menuOverlay?.classList.remove("is-open");
  menuOverlay?.setAttribute("aria-hidden", "true");
  menuOverlay?.setAttribute("inert", "");
  menuButton?.setAttribute("aria-label", "Open menu");
  menuButton?.setAttribute("aria-expanded", "false");
}

function toggleMenu() {
  if (body.classList.contains("menu-open")) {
    closeMenu();
  } else {
    openMenu();
  }
}

function showSlide(nextIndex: number, direction: number) {
  if (!hasStage || isAnimating || nextIndex === activeSlide) return;
  isAnimating = true;
  stage?.classList.add("is-transitioning");

  const resolvedIndex = (nextIndex + slides.length) % slides.length;
  const previousIndex = activeSlide;
  activeSlide = resolvedIndex;
  updateSlideAccessibility();
  window.setTimeout(updatePrompt, 420);

  slides.forEach((slide, index) => {
    slide.classList.remove("is-active", "is-before");
    if (index === previousIndex && direction > 0) {
      slide.classList.add("is-before");
    }
    if (index === activeSlide && direction < 0) {
      slide.classList.add("is-before");
    }
  });

  requestAnimationFrame(() => {
    slides[activeSlide]?.classList.add("is-active");
  });

  window.setTimeout(() => {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-before", index < activeSlide);
    });
    stage?.classList.remove("is-transitioning");
    isAnimating = false;
  }, 1160);
}

function moveSlide(direction: number) {
  if (!hasStage) return;
  showSlide(activeSlide + direction, direction);
}

function updatePrompt() {
  if (!promptLabel) return;
  promptLabel.textContent = promptLabels[activeSlide] || "Scroll";
  stagePrompt?.setAttribute("aria-label", promptAriaLabels[activeSlide] || "Scroll to next slide");
}

function goToRoute(route: string) {
  if (!hasStage) return;
  const targetIndex = slides.findIndex((slide) => slide.dataset.route === route);
  if (targetIndex < 0) return;
  const direction = targetIndex > activeSlide ? 1 : -1;
  showSlide(targetIndex, direction);
  window.history.replaceState(null, "", route === "home" ? "#home" : `#${route}`);
}

menuButton?.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    closeMenu();
    if (!hasStage) return;
    event.preventDefault();
    const target = link.dataset.menuTarget;
    if (target) goToRoute(target);
  });
});

menuOverlay?.querySelectorAll<HTMLAnchorElement>(".menu-details a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

prevButton?.addEventListener("click", () => moveSlide(-1));
nextButton?.addEventListener("click", () => moveSlide(1));
stagePrompt?.addEventListener("click", () => {
  const activeDetailHref = slides[activeSlide]?.dataset.detailHref;
  if (activeSlide > 0 && activeDetailHref) {
    window.location.href = activeDetailHref;
    return;
  }
  moveSlide(1);
});

window.addEventListener(
  "wheel",
  (event) => {
    if (!hasStage) return;
    if (body.classList.contains("menu-open")) return;
    if (Math.abs(event.deltaY) < 32) return;
    event.preventDefault();
    moveSlide(event.deltaY > 0 ? 1 : -1);
  },
  { passive: false }
);

window.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0]?.clientY || 0;
});

window.addEventListener("touchend", (event) => {
  if (!hasStage) return;
  const touchEndY = event.changedTouches[0]?.clientY || 0;
  const distance = touchStartY - touchEndY;
  if (Math.abs(distance) > 56) moveSlide(distance > 0 ? 1 : -1);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
  if (!hasStage) return;
  if (body.classList.contains("menu-open")) return;
  if (event.key === "ArrowDown" || event.key === "ArrowRight") moveSlide(1);
  if (event.key === "ArrowUp" || event.key === "ArrowLeft") moveSlide(-1);
});

menuLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    const target = link.dataset.menuTarget;
    menuLinks.forEach((item) => item.classList.toggle("is-hovered", item === link));
    menuVisuals.forEach((visual) => {
      visual.classList.toggle("is-active", visual.dataset.menuVisual === target);
    });
  });
});

menuLinks[0]?.classList.add("is-hovered");
const initialRoute = window.location.hash.replace("#", "");
if (hasStage && initialRoute && initialRoute !== "home") {
  const initialIndex = slides.findIndex((slide) => slide.dataset.route === initialRoute);
  if (initialIndex > -1) {
    activeSlide = initialIndex;
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === activeSlide);
      slide.classList.toggle("is-before", index < activeSlide);
    });
  }
}
updatePrompt();
updateSlideAccessibility();

window.addEventListener("mousemove", (event) => {
  if (!cursorRing || !hasFinePointer) return;
  cursorRing.classList.add("is-visible");
  cursorTargetX = event.clientX;
  cursorTargetY = event.clientY;
});

window.addEventListener("mouseleave", () => {
  cursorRing?.classList.remove("is-visible");
});

document.querySelectorAll("a, button, [role='button']").forEach((item) => {
  if (!hasFinePointer) return;
  item.addEventListener("mouseenter", () => cursorRing?.classList.add("is-interactive"));
  item.addEventListener("mouseleave", () => cursorRing?.classList.remove("is-interactive"));
});

function renderCursor() {
  if (cursorRing && hasFinePointer) {
    cursorX += (cursorTargetX - cursorX) * 0.18;
    cursorY += (cursorTargetY - cursorY) * 0.18;
    cursorRing.style.left = `${cursorX}px`;
    cursorRing.style.top = `${cursorY}px`;
    window.requestAnimationFrame(renderCursor);
  }
}

if (hasFinePointer) renderCursor();

export {};
