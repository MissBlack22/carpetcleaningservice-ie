/**
 * Site-wide behaviour: mobile nav toggle + conversion event tracking stubs.
 * Analytics is not wired up yet (no GA4 ID supplied) — trackEvent() pushes to
 * window.dataLayer so GA4/GTM can be dropped in later without touching markup.
 */
(function () {
  function trackEvent(name, params) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(Object.assign({ event: name }, params || {}));
  }
  window.trackEvent = trackEvent;

  document.addEventListener("DOMContentLoaded", function () {
    var navToggle = document.querySelector(".nav-toggle");
    var mobileMenu = document.querySelector(".mobile-menu");
    if (navToggle && mobileMenu) {
      navToggle.addEventListener("click", function () {
        var isOpen = mobileMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.body.style.overflow = isOpen ? "hidden" : "";
      });
      mobileMenu.querySelectorAll("a, .mobile-menu__close").forEach(function (el) {
        el.addEventListener("click", function () {
          mobileMenu.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });
    }

    document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
      el.addEventListener("click", function () {
        trackEvent("phone_click", { link_url: el.getAttribute("href") });
      });
    });
    document.querySelectorAll('a[href*="wa.me"]').forEach(function (el) {
      el.addEventListener("click", function () {
        trackEvent("whatsapp_click", { link_url: el.getAttribute("href") });
      });
    });
    document.querySelectorAll("form[data-quote-form]").forEach(function (form) {
      form.addEventListener("submit", function () {
        trackEvent("quote_request_submit", { form_id: form.id || "quote-form" });
      });
    });
  });
})();
