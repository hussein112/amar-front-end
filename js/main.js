// Full Page Search

const searchBox = document.getElementById("search-box");
document.getElementById("search").addEventListener("click", () => {
    searchBox.style.display = 'flex';
});
document.getElementById("close").addEventListener("click", () => {
    searchBox.style.display = 'none';
});