/**
 * Single source of truth for business contact details shown across the site.
 * Update ONLY this file (and data/business.json for reference) when real
 * business details are supplied — every page pulls from here at load time.
 */
(function () {
  var BUSINESS = {
    // Real number supplied directly by the owner for this brand (2026-08-19) — supersedes the
    // 085 202 1222 number pulled from krystalklean.ie/spotless.ie during the earlier asset audit.
    name: "Carpet Cleaning Service",
    phoneDisplay: "089 963 2144",
    phoneTel: "tel:+353899632144",
    // contact@carpetcleaningservice.ie — the owner's stated setup is a domain email forwarded to
    // carpetcleaningservice.ie@gmail.com at the DNS/email-host level (same pattern used on their
    // other sites). The site only ever references the branded address; the Gmail forward is a
    // backend detail the owner configures with their domain/email host, not something the HTML
    // needs to know about. MUST set up that forwarding before launch or mail will bounce — see
    // READY-FOR-NETLIFY.md.
    email: "contact@carpetcleaningservice.ie",
    // WhatsApp confirmed by the owner to be the same number as phoneTel above (2026-08-19).
    whatsappEnabled: true,
    whatsappTel: "+353899632144",
    whatsappLink: "https://wa.me/353899632144?text=Hi%2C%20I%27d%20like%20a%20free%20carpet%20cleaning%20quote",
    // Confirmed by the owner (2026-08-19): "8 to 5, normal hours" — standard Mon-Fri business day.
    hoursDisplay: "Mon–Fri: 8:00am – 5:00pm",
    // Confirmed by the owner (2026-08-19): service area genuinely covers Dublin, Kildare and Wicklow.
    serviceArea: "Dublin, Kildare & Wicklow, Ireland"
  };

  function applyBusinessData(root) {
    root = root || document;

    root.querySelectorAll('[data-biz="name"]').forEach(function (el) {
      el.textContent = BUSINESS.name;
    });
    root.querySelectorAll('[data-biz="phone"]').forEach(function (el) {
      el.textContent = BUSINESS.phoneDisplay;
    });
    root.querySelectorAll('[data-biz="phone-href"]').forEach(function (el) {
      el.setAttribute("href", BUSINESS.phoneTel);
    });
    root.querySelectorAll('[data-biz="email"]').forEach(function (el) {
      el.textContent = BUSINESS.email;
    });
    root.querySelectorAll('[data-biz="email-href"]').forEach(function (el) {
      el.setAttribute("href", "mailto:" + BUSINESS.email);
    });
    root.querySelectorAll('[data-biz="hours"]').forEach(function (el) {
      el.textContent = BUSINESS.hoursDisplay;
    });
    root.querySelectorAll('[data-biz="whatsapp-href"]').forEach(function (el) {
      if (BUSINESS.whatsappEnabled) {
        el.setAttribute("href", BUSINESS.whatsappLink);
        el.hidden = false;
      } else {
        el.hidden = true;
      }
    });
  }

  window.BUSINESS = BUSINESS;
  window.applyBusinessData = applyBusinessData;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyBusinessData(document);
    });
  } else {
    applyBusinessData(document);
  }
})();
