/* ===============================
   DOM READY
================================ */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     HAMBURGER MENU
  ================================ */
  window.toggleMenu = function () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };


  /* ===============================
     EMAILJS INITIALIZE
  ================================ */
  emailjs.init("DwH6EaIDlSzDrhyhr"); // your public key


  /* ===============================
     CONTACT FORM + BUTTON ANIMATION
  ================================ */
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("submitBtn");
  const text = btn.querySelector(".text");

  if (!form || !btn) return; // safety check

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button
    btn.disabled = true;

    // Send mail to YOU
    emailjs.sendForm(
      "service_7js58yp",   // service ID
      "template_dkv0xyb",  // main template
      form
    )
    .then(() => {

      /* ✅ SUCCESS UI */
      btn.classList.add("success");
      text.textContent = "Thanks";

      // Auto-reply to user (background)
      emailjs.send(
        "service_7js58yp",
        "template_in44t0a",
        {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value
        }
      );

      // Reset after delay
      setTimeout(() => {
        btn.classList.remove("success");
        text.textContent = "Send Message";
        btn.disabled = false;
        form.reset();
      }, 2500);

    })
    .catch((error) => {
      console.error("EmailJS Error:", error);

      alert("❌ Message failed. Please try again.");

      btn.disabled = false;
      text.textContent = "Send Message";
    });
  });

});
