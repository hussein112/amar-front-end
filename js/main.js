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


const postTypeBtns = document.getElementById("btns");
const resourcePostBtn = document.getElementById("resource-btn");
const placmentPostBtn = document.getElementById("placement-btn");
const placementPost = document.getElementById('placement-post');
const resourcePost = document.getElementById('resource-post');
resourcePostBtn.addEventListener("click", () => {
    resourcePost.style.display = 'block';
    placementPost.style.display = 'none';
    resourcePostBtn.classList.add('active-post-type');
    placmentPostBtn.classList.remove('active-post-type');
});

placmentPostBtn.addEventListener("click", () => {
    resourcePost.style.display = 'none';
    placementPost.style.display = 'block';
    placmentPostBtn.classList.add('active-post-type');
    resourcePostBtn.classList.remove('active-post-type');
});
// New Profile Picture Button

document.getElementById("new-profile").addEventListener("click", () => {
    document.getElementById("new-profile-file").click();
});


