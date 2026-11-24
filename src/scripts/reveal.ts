// Adds .is-visible to [data-reveal] and .is-in to [data-fill] elements when they enter the viewport (once).
// The final state is the default: an element is "armed" (hidden before its effect) only when scripting, an
// IntersectionObserver and full motion are available and it is still below the viewport.
const items = document.querySelectorAll<HTMLElement>("[data-reveal], [data-fill]");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const show = (el: Element) => el.classList.add(el.hasAttribute("data-fill") ? "is-in" : "is-visible");
if (reduce || !("IntersectionObserver" in window)) {
  items.forEach(show);
} else {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        show(e.target);
        io.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -10% 0px", threshold: 0.3 });
  items.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) { show(el); return; }
    el.classList.add("is-armed");
    requestAnimationFrame(() => io.observe(el));
  });
}
