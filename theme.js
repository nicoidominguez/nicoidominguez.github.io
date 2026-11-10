// Light/dark toggle. The initial theme is set inline in <head> to avoid a flash.
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme");

  function apply(theme) {
    root.dataset.theme = theme;
    try { localStorage.setItem("theme", theme); } catch (e) {}
    if (button) {
      var dark = theme === "dark";
      button.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      button.setAttribute("aria-pressed", String(dark));
    }
  }

  if (button) {
    button.addEventListener("click", function () {
      apply(root.dataset.theme === "dark" ? "light" : "dark");
    });
  }
  apply(root.dataset.theme === "dark" ? "dark" : "light");

  // Abstract toggles on the Research page
  document.querySelectorAll(".abstract-toggle").forEach(function (btn) {
    var target = document.getElementById(btn.getAttribute("aria-controls"));
    if (!target) return;
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      target.hidden = open;
    });
  });
})();
