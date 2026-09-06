const themeBtn = document.getElementById("themeBtn");

// ================= THEME =================

// Page load par saved theme check karo
const savedTheme = localStorage.getItem("theme");

// Agar light theme saved hai
if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    if (themeBtn) {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

} 
else {

    document.body.classList.remove("light-theme");

    if (themeBtn) {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

}


// Theme button
if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-moon"></i>';

        } 
        else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="fa-solid fa-sun"></i>';
        }

    });

}


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("hidden");

    });

}