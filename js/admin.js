const portfolioGallery = document.getElementById('portfolioGallery');

// Funkcja renderująca projekty w portfolio
function renderPortfolio() {
    portfolioGallery.innerHTML = '';
    projects.forEach((project, index) => {
        const div = document.createElement('div');
        div.classList.add('portfolio-item');
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-delay', `${100 * (index + 1)}`);
        div.innerHTML = `
            <img src="${project.codeUrl}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        portfolioGallery.appendChild(div);
    });
}

// Upewnij się, że portfolio jest aktualizowane razem z listą projektów
projectForm.addEventListener('submit', function () {
    renderPortfolio();
});

// Początkowe renderowanie portfolio
renderPortfolio();
