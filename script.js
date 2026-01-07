// Toggle password visibility
const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("togglePassword");
toggleBtn.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";
  passwordInput.type = isHidden ? "text" : "password";
  toggleBtn.textContent = isHidden ? "Hide" : "Show";
  passwordInput.focus();
});

// Basic submit UX (demo only)
const form = document.getElementById("loginForm");
const loginBtn = document.getElementById("loginBtn");
form.addEventListener("submit", (e) => {
  if (!form.checkValidity()) return; // let browser show native validation
  e.preventDefault();
  loginBtn.disabled = true;
  loginBtn.textContent = "Logging in...";
  setTimeout(() => {
    loginBtn.disabled = false;
    loginBtn.textContent = "Login";
    alert("Demo only: connect to backend for real login.");
  }, 1200);
});