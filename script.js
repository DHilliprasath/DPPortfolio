const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");
const text = btn.querySelector(".text");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Start animation
  btn.classList.add("success");
  text.textContent = "Thanks";

  // Simulate success (replace with EmailJS success callback)
  setTimeout(() => {
    btn.classList.remove("success");
    text.textContent = "Send Message";
    form.reset();
  }, 2500);
});



const form = document.getElementById("contactForm");
const btn = document.getElementById("submitBtn");
const text = btn.querySelector(".text");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // Trigger animation
  btn.classList.add("success");
  text.textContent = "Thanks";

  // Demo reset (replace with EmailJS success)
  setTimeout(() => {
    btn.classList.remove("success");
    text.textContent = "Send Message";
    form.reset();
  }, 2500);
});
