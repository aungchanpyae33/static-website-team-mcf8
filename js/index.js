// toggle Functionality for dropdown menu
const toggleBtn = document.getElementById("menu-btn");
console.log(toggleBtn);
const dropdown = document.getElementById("dropdownContainer");
console.log(dropdown);
toggleBtn.addEventListener("click", () => {
  dropdown.classList.toggle("drop-show");
  console.log(dropdown);
  // toggle visible
});

// Optional: click outside to close
document.addEventListener("click", (e) => {
  if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.remove("drop-show");
  }
});
