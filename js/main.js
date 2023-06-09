const navMenu = document.getElementById("mobile-nav");
const navMain = document.getElementById("nav-main");

const navTop = navMain.offsetTop;

function openToggle(){
    navMenu.style.display = "block"
}

function closeToggle(){
    navMenu.style.display = "none"
}

function toggleMenuBackground() {
    if (window.pageYOffset > navTop) {
      navMain.classList.add("nav-background");
    } else {
      navMain.classList.remove("nav-background");
    }
  }
  
  // Adiciona um ouvinte de evento para a rolagem da janela
  window.addEventListener("scroll", toggleMenuBackground);


