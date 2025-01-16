document.addEventListener("DOMContentLoaded", () => {
    const portfolioGallery = document.querySelector(".portfolio-gallery");

    // Przykładowe dane projektów
    const projects = [
        { id: "p1", title: "Projekt 1", description: "Opis Projektu 1", animacio: "100" },
        { id: "p2", title: "Projekt 2", description: "Opis Projektu 2", animacio: "200" },
        { id: "p3", title: "Projekt 3", description: "Opis Projektu 3", animacio: "300" },
        { id: "p4", title: "Projekt 4", description: "Opis Projektu 4", animacio: "400" }
    ];

    // Generowanie kafelków
    projects.forEach((project, index) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("portfolio-item");

        // Dodanie animacji AOS
        projectDiv.setAttribute("data-aos", "fade-up");
        projectDiv.setAttribute("data-aos-delay", `${index * project.animacio}`);

        projectDiv.innerHTML = `
            <img src="../projekt_grafik/${project.id}.jpg" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <button>Więcej</button>
        `;

        portfolioGallery.appendChild(projectDiv);
    });
});
