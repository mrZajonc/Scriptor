document.addEventListener("DOMContentLoaded", () => {
    const portfolioGallery = document.querySelector(".portfolio-gallery");

    // Przykładowe dane projektów
    const projects = [
        { id: "p1", title: "Projekt 1", description: "Opis Projektu 1" },
        { id: "p2", title: "Projekt 2", description: "Opis Projektu 2" },
        { id: "p3", title: "Projekt 3", description: "Opis Projektu 3" },
        { id: "p4", title: "Projekt 4", description: "Opis Projektu 4" }
    ];

    // Generowanie kafelków
    projects.forEach((project, index) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("portfolio-item");

        // Dodanie animacji AOS
        projectDiv.setAttribute("data-aos", "fade-up");
        projectDiv.setAttribute("data-aos-delay", `${index * 100}`);

        projectDiv.innerHTML = `
            <img src="grafika_projekt/${project.id}.jpg" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button>Więcej</button>
        `;

        portfolioGallery.appendChild(projectDiv);
    });
});
