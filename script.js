// script.js

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Live Date & Time in Footer ---
  function updateDateTime() {
    const timeContainer = document.getElementById("live-time");
    if (timeContainer) {
      const now = new Date();
      timeContainer.innerText = now.toLocaleString();
    }
  }
  // Update every second
  setInterval(updateDateTime, 1000);
  updateDateTime(); // Initial call

  // --- 2. Contact Form Validation (Only runs on Contact Page) ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent actual submission for demo

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();

      // Simple Validation Logic
      let isValid = true;
      let errorMessage = "";

      if (name === "") {
        errorMessage += "Name is required.\n";
        isValid = false;
      }

      // Basic Email Regex
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        errorMessage += "Please enter a valid email address.\n";
        isValid = false;
      }

      if (phone === "") {
        errorMessage += "Phone number is required.\n";
        isValid = false;
      }

      if (message === "") {
        errorMessage += "Message cannot be empty.\n";
        isValid = false;
      }

      if (isValid) {
        alert("Form Submitted Successfully!");
        contactForm.reset();
      } else {
        alert(errorMessage);
      }
    });
  }
});
