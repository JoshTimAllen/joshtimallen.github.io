(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* nav: border on scroll, mobile menu */
  const nav = document.getElementById("nav");
  const menuBtn = document.getElementById("menuBtn");
  const links = document.getElementById("links");
  const onScroll = () => nav.classList.toggle("solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", e => {
    if (e.target.closest("a")) { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  /* fade in on scroll */
  const io = new IntersectionObserver(entries => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }, { threshold: 0.12 });
  document.querySelectorAll("[data-reveal]").forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 70 + "ms";
    io.observe(el);
  });

  /* screenshot tabs */
  const tabs = [...document.querySelectorAll('.seg [role="tab"]')];
  const select = tab => tabs.forEach(t => {
    const on = t === tab;
    t.setAttribute("aria-selected", String(on));
    t.tabIndex = on ? 0 : -1;
    document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
  });
  tabs.forEach((t, i) => {
    t.addEventListener("click", () => select(t));
    t.addEventListener("keydown", e => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      const next = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
      select(next); next.focus();
    });
  });

  /* lightbox */
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  let set = [], idx = 0, opener = null;
  const show = i => {
    idx = (i + set.length) % set.length;
    const img = set[idx].querySelector("img");
    lbImg.src = img.src; lbImg.alt = img.alt;
  };
  const open = (gallery, i, from) => {
    set = [...gallery.querySelectorAll(".shot")];
    opener = from; lb.hidden = false; show(i);
    document.body.style.overflow = "hidden";
    document.getElementById("lbClose").focus();
  };
  const close = () => { lb.hidden = true; document.body.style.overflow = ""; if (opener) opener.focus(); };
  document.querySelectorAll(".gallery").forEach(g => g.addEventListener("click", e => {
    const s = e.target.closest(".shot");
    if (s) open(g, [...g.querySelectorAll(".shot")].indexOf(s), s);
  }));
  document.querySelectorAll("[data-open]").forEach(b => b.addEventListener("click", () => open(document.getElementById(b.dataset.open), 0, b)));
  document.getElementById("lbClose").addEventListener("click", close);
  document.getElementById("lbPrev").addEventListener("click", () => show(idx - 1));
  document.getElementById("lbNext").addEventListener("click", () => show(idx + 1));
  lb.addEventListener("click", e => { if (e.target === lb) close(); });
  addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") show(idx + 1);
    else if (e.key === "ArrowLeft") show(idx - 1);
  });
})();
