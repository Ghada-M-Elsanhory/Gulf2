
// script.js
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const overlay = document.querySelector('.overlay');
    
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}
// script.js
function redirectToProjects() {
    window.location.href = 'projects.html';
  }
  const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 10); 
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

function showArticle(articleNumber) {
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => article.style.display = 'none'); 
    
    document.getElementById(`article${articleNumber}`).style.display = 'block'; 
  }
  