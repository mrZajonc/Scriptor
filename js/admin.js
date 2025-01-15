let projects = [];

// DOM elements
const projectForm = document.getElementById('projectForm');
const projectList = document.getElementById('projectList');

// Render the list of projects
function renderProjects() {
    projectList.innerHTML = '';
    projects.forEach(async (project, index) => {
        const li = document.createElement('li');

        // Pobierz zawartość kodu z GitHuba
        const code = await fetchCode(project.codeUrl);

        li.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <pre>${code}</pre>
            <button onclick="deleteProject(${index})">Delete</button>
        `;
        projectList.appendChild(li);
    });
}

// Pobierz kod z podanego URL
async function fetchCode(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch code');
        return await response.text();
    } catch (error) {
        console.error('Error fetching code:', error);
        return 'Error loading code. Please check the URL.';
    }
}

// Add a new project
projectForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const codeUrl = document.getElementById('codeUrl').value;

    projects.push({ title, description, codeUrl });
    renderProjects();
    projectForm.reset();
});

// Delete a project
function deleteProject(index) {
    projects.splice(index, 1);
    renderProjects();
}

// Initial render
renderProjects();

const portfolioGallery = document.getElementById('portfolioGallery');

// Funkcja renderująca projekty w portfolio
function renderPortfolio() {
    portfolioGallery.innerHTML = '';
    projects.forEach(async (project, index) => {
        const code = await fetchCode(project.codeUrl); // Pobierz kod z GitHuba
        const div = document.createElement('div');
        div.classList.add('portfolio-item');
        div.setAttribute('data-aos', 'fade-up');
        div.setAttribute('data-aos-delay', `${100 * (index + 1)}`);
        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <pre>${code}</pre>
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
