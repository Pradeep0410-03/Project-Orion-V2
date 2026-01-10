// ==============================
// 1️⃣ Fake user data (demo only)
// ==============================
const user = {
    username: "admin",
    password: "admin123"
};

// ==============================
// 2️⃣ Get required elements
// ==============================
const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");

// ==============================
// 3️⃣ LOGIN LOGIC (FORM SUBMIT)
// ==============================
form.addEventListener("submit", function (e) {
    e.preventDefault(); // ⛔ stop page reload

    const enteredUsername = usernameInput.value.trim();
    const enteredPassword = passwordInput.value.trim();

    // 🔹 Basic validation
    if (enteredUsername === "" || enteredPassword === "") {
        alert("Please fill all fields");
        return;
    }

    // 🔹 Credential check (demo only)
    if (
        enteredUsername === user.username &&
        enteredPassword === user.password
    ) {
        loginBtn.disabled = true;
        loginBtn.textContent = "Logging in...";

        // Fake delay (like server request)
        setTimeout(() => {
            alert("Login successful ✅");
            loginBtn.textContent = "Login";
            loginBtn.disabled = false;
            form.reset(); // clear form after success
        }, 1200);
    } else {
        alert("Invalid username or password ❌");
        passwordInput.value = ""; // clear only password
        passwordInput.focus();
    }
});

// ==============================
// 4️⃣ RESET BUTTON HANDLING
// ==============================
form.addEventListener("reset", function () {
    setTimeout(() => {
        usernameInput.focus();
    }, 0);
});
