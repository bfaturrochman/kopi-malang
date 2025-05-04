// toggle class active hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
    navbarNav.classList.toggle("active");
    e.preventDefault();
};

// toggle class active search form
const search = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

// ketika icon search di klik
document.querySelector("#search").onclick = (e) => {
    search.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
};

// toggle class active shopping cart
const shpCart = document.querySelector(".shopping-cart");

document.querySelector("#shopping-cart").onclick = (e) => {
    shpCart.classList.toggle("active");
    e.preventDefault();
};

// click di luar side bar untuk keluar
const hamburger = document.querySelector("#hamburger-menu");
const searchBtn = document.querySelector("#search");
const shopping = document.querySelector("#shopping-cart");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
    if (!searchBtn.contains(e.target) && !search.contains(e.target)) {
        search.classList.remove("active");
    }
    if (!shopping.contains(e.target) && !shpCart.contains(e.target)) {
        shpCart.classList.remove("active");
    }
});

// modal box
const itemDetailModal = document.querySelector("#item-detail");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};
