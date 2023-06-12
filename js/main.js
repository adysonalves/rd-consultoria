const navMenu = document.getElementById("mobile-nav");
const navMain = document.getElementById("nav-main");
const dataAtual = document.getElementById("data-atual");
const body = document.getElementsByTagName('body');

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

  const cards = document.querySelectorAll('.cards-about .card');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};

const cardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, options);

cards.forEach(card => {
  cardObserver.observe(card);
});

function preencheData(){
    const data = new Date();
    const anoAtual = data.getFullYear();
    
    dataAtual.innerText = anoAtual
}

preencheData();

window.addEventListener('load', function () {
  var loadingContainer = document.getElementById('loading-container');
  setTimeout(() => {
    loadingContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }, 1000)
});




