(function () {
  "use strict";
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* mobile nav */
  var hb = document.getElementById("hamburger"),
    nav = document.getElementById("mainNav");
  if (hb && nav) {
    hb.addEventListener("click", function () {
      var o = nav.classList.toggle("is-open");
      hb.setAttribute("aria-expanded", String(o));
    });
  }
  /* dropdown (tap on mobile) */
  var dd = document.querySelector(".dd");
  if (dd) {
    dd.querySelector("a").addEventListener("click", function (e) {
      if (window.innerWidth <= 1020) {
        e.preventDefault();
        dd.classList.toggle("open");
      }
    });
  }
  /* privacy modal */
  var m = document.getElementById("privacy-modal");
  document.querySelectorAll("[data-privacy]").forEach(function (b) {
    b.addEventListener("click", function () {
      m.classList.add("show");
    });
  });
  if (m)
    m.addEventListener("click", function (e) {
      if (e.target === m || e.target.classList.contains("x")) m.classList.remove("show");
    });

  /* phone field: digits only, also handles pasted +91 numbers */
  var ph = document.getElementById("phone");
  if (ph) {
    ph.addEventListener("input", function () {
      ph.value = ph.value.replace(/\D/g, "").slice(0, 10);
    });
    ph.addEventListener("paste", function (e) {
      var t = (e.clipboardData || window.clipboardData).getData("text") || "";
      var d = t.replace(/\D/g, "");
      if (d.length > 10) d = d.slice(-10);
      e.preventDefault();
      ph.value = d;
    });
  }

  /* booking form -> Web3Forms -> thank you page */
  var form = document.getElementById("bookingForm");
  if (form) {
    var btn = form.querySelector('button[type="submit"]');
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var t = btn.textContent;
      btn.textContent = "Submitting...";
      btn.disabled = true;
      try {
        var r = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: new FormData(form),
        });
        var d = await r.json();
        if (r.ok) {
          window.location.href = "thankyou.html";
        } else {
          alert(
            "Booking could not be sent: " +
              (d.message || "Something went wrong") +
              ". Please try again or call us.",
          );
          btn.textContent = t;
          btn.disabled = false;
        }
      } catch (err) {
        alert(
          "Could not send your booking. Please check your internet and try again, or call us directly.",
        );
        btn.textContent = t;
        btn.disabled = false;
      }
    });
  }
})();
