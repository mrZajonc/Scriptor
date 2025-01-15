const projectList = document.getElementById('projectList');

// Funkcja renderująca projekty (statycznie dla podglądu)
function renderProjects() {
    fetch('/projects')
        .then((res) => res.json())
        .then((projects) => {
            projectList.innerHTML = '';
            projects.forEach((project) => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <img src="${project.imageUrl}" alt="${project.title}">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                projectList.appendChild(li);
            });
        })
        .catch((err) => console.error('Error fetching projects:', err));
}

// Renderowanie przy ładowaniu strony
renderProjects();
