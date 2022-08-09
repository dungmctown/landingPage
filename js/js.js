const menuHeader = document.querySelector(".header-menu")
const menuList = document.querySelector(".header-list")
console.log(menuList)
let booleanMenu = false;
menuHeader.addEventListener("click", (e) => {

  if (booleanMenu === false) {
    menuList.style.display = "block";
    booleanMenu = true;
  } else if (booleanMenu === true) {
    menuList.style.display = "none";
    booleanMenu = false;
  }
})

const menuFooter = document.querySelector(".footer-menu")
const menuListFooter = document.querySelector(".footer-info")
let booleanFooter = false;
menuFooter.addEventListener("click", () => {
  if (booleanFooter === false) {
    menuListFooter.style.display = "flex";
    booleanFooter = true;
  } else if (booleanFooter === true) {
    menuListFooter.style.display = "none";
    booleanFooter = false;
  }
})







const libraryButton = document.querySelector(".library-button-item")
libraryButton.addEventListener("click", () => {
  libraryButton.style.color =
    '#e2f471'
  libraryButton.style.backgroundColor = "#1e1e1e"
  touch = true;
})
