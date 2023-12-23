// Toggler-DarkMode-Theme
if (localStorage.getItem("theme") === "dark") {
     document.body.classList.add("dark-mode"),
     document.body.classList.add("dark-mode");
}
// DarkMode-Android
document.getElementById("darkModeToggle").addEventListener("click", function () {
     document.body.classList.toggle("dark-mode");
     if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "light");
     } else {
          localStorage.setItem("theme", "dark");
     }
});
// DarkMode-PC And Laptop
document.getElementById("lightModeToggler").addEventListener("click", function () {
     document.body.classList.toggle("dark-mode");
     if (document.body.classList.contains("dark-mode")) {
          localStorage.setItem("theme", "light");
     } else {
          localStorage.setItem("theme", "dark");
     }
});