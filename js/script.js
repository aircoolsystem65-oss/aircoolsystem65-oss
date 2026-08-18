(function () {
  "use strict";

  var WHATSAPP_NUMBER = "919527868342";

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Mobile nav toggle ---- */
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("mainNav");

  function closeNav() {
    nav.classList.remove("is-open");
    hamburger.classList.remove("is-open");
    hamburger.setAttribute("aria-expanded", "false");
  }

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      hamburger.classList.toggle("is-open", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  /* ---- Sticky header shadow on scroll ---- */
  var header = document.querySelector(".header");
  if (header) {
    var toggleShadow = function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = "0 4px 18px rgba(10,46,82,0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", toggleShadow, { passive: true });
    toggleShadow();
  }

  /* ---- Quick Booking form -> Web3Forms & Thank You Page Handoff ---- */
  var form = document.getElementById("bookingForm");
  var submitBtn = form ? form.querySelector('button[type="submit"]') : null;

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var originalText = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.textContent = "Submitting...";
        submitBtn.disabled = true;
      }

      var formData = new FormData(form);

      try {
        var response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        var data = await response.json();

        if (response.ok) {
          // Redirect directly to the thank you page
          window.location.href = "thankyou.html";
        } else {
          alert("Error: " + (data.message || "Something went wrong"));
          if (submitBtn) {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }
        }
      } catch (error) {
        alert("Something went wrong. Please try again.");
        if (submitBtn) {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }
      }
    });
  }
})();