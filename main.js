const menuBtn = document.querySelector(".menu__btn");
const menuList = document.querySelector(".menu__list");
const portfolioContent = document.querySelector(".portfolio-content")
const visibilityHide = "hide";
const visibilityShow = "show";

function setItemVisibility(item, visible) {
    item.classList.toggle(visible ? visibilityShow : visibilityHide);
}

menuBtn.addEventListener("click", () => {
    setItemVisibility(menuList, false);
    setItemVisibility(portfolioContent, false);
});

function changePortfolioVisibility() {
    setItemVisibility(document.getElementById("portfolio"), false);
    setItemVisibility(portfolioContent, true);
}

window.onclick = (event) => {
    if (!event.target.matches('.port_button')) {
        const dropdowns = document.getElementsByClassName("portfolio-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}