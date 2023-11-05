const searchIcon = document.getElementById("search-clickable");
const categoryNav = document.getElementById("categories-nav");
const searchBox = document.getElementById("search-box");
searchBox.addEventListener("click", (e) => {
  e.stopPropagation();
});
searchIcon.addEventListener("click", (e) => {
  e.stopPropagation();
  categoryNav.style.display = "none";
  searchBox.style.display = "flex";
});
window.addEventListener("click", () => {
  if (searchBox.style.display === "flex") {
    categoryNav.style.display = "flex";
    searchBox.style.display = "none";
  }
});
