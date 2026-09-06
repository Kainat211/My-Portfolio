const themeBtn = document.getElementById("themeBtn");

// Page load par saved theme check karo
const savedTheme = localStorage.getItem("theme");

// Agar light saved hai to light theme lagao
if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
} 
else {
    document.body.classList.remove("light-theme");
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}


// Theme button
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {

        localStorage.setItem("theme", "light");

        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    } 
    else {

        localStorage.setItem("theme", "dark");

        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }

});


// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});