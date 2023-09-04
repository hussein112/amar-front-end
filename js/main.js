// Enable Bootstrap Tooltips

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Full Page Search

const searchBox = document.getElementById("search-box");
document.getElementById("search").addEventListener("click", () => {
    searchBox.style.display = 'flex';
});
document.getElementById("close").addEventListener("click", () => {
    searchBox.style.display = 'none';
});


// New Profile Picture Button

document.getElementById("new-profile").addEventListener("click", () => {
    document.getElementById("new-profile-file").click();
});