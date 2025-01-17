// document.addEventListener("DOMContentLoaded", () => {
//     const portfolioGallery = document.querySelector(".portfolio-gallery");

//     // Przykładowe dane projektów
//     const projects = [
//         { id: "p1", title: "Projekt 1", description: "Opis Projektu 1", animacio: "100", imageUrl: "grafika_projekt/p1.jpg"  },
//         { id: "p2", title: "Projekt 2", description: "Opis Projektu 2", animacio: "200", imageUrl: "grafika_projekt/p2.jpg" },
//         { id: "p3", title: "Projekt 3", description: "Opis Projektu 3", animacio: "300", imageUrl: "grafika_projekt/p3.jpg" },
//         { id: "p4", title: "Projekt 4", description: "Opis Projektu 4", animacio: "400", imageUrl: "grafika_projekt/p4.jpg" },
//     ];

//     // Generowanie kafelków
//     projects.forEach((project, index) => {
//         const projectDiv = document.createElement("div");
//         projectDiv.classList.add("portfolio-item");

//         // Dodanie animacji AOS
//         projectDiv.setAttribute("data-aos", "fade-up");
//         projectDiv.setAttribute("data-aos-delay", `${index * project.animacio}`);

//         projectDiv.innerHTML = `
//             <img src="../projekt_grafik/${project.id}.jpg" alt="${project.title}">
//             <h3>${project.title}</h3>
//             <p>${project.description}</p>
//             <button data-id="${project.id}">Więcej</button>
//         `;

//         portfolioGallery.appendChild(projectDiv);
//     });

//  // Funkcja otwierająca modal
//     const openModal = (project) => {
//         modalImage.src = project.imageUrl;
//         modalTitle.textContent = project.title;
//         modalDescription.textContent = project.description;
//         modal.classList.add("visible");
//     };

//     // Nasłuchiwanie kliknięć na przyciskach "Więcej"
//     portfolioGallery.addEventListener("click", (event) => {
//         if (event.target.tagName === "BUTTON") {
//             const projectId = event.target.getAttribute("data-id");
//             const project = projects.find((proj) => proj.id === projectId);
//             if (project) openModal(project);
//         }
//     });

//     // Zamknięcie modal po kliknięciu na "X"
//     closeButton.addEventListener("click", () => {
//         modal.classList.remove("visible");
//     });

//     // Zamknięcie modal po kliknięciu poza treść modal
//     modal.addEventListener("click", (event) => {
//         if (event.target === modal) {
//             modal.classList.remove("visible");
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", () => {
    const portfolioGallery = document.querySelector(".portfolio-gallery");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.querySelector(".close-button");

    // Przykładowe dane projektów
    const projects = [
        { id: "p1", title: "Projekt 1", description: "Twoje centrum wiedzy i narzędzi online. Oferujemy praktyczne poradniki, nowoczesne usługi oraz najnowsze informacje ze świata technologii, biznesu i edukacji. Rozwijaj się z nami!" },
        { id: "p2", title: "Projekt 2", description: "Szczegóły Projektu 2" },
        { id: "p3", title: "Projekt 3", description: "Szczegóły Projektu 3" },
        { id: "p4", title: "Projekt 4", description: "Szczegóły Projektu 4" }
    ];
    

    // Generowanie kafelków
    projects.forEach((project, index) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("portfolio-item");

        // Dodanie animacji AOS
        projectDiv.setAttribute("data-aos", "fade-up");
        projectDiv.setAttribute("data-aos-delay", `${index * 100}`);

        projectDiv.innerHTML = `
            <img src="../projekt_grafik/${project.id}.jpg" alt="${project.title}">
            <h3>${project.title}</h3>
            
            <button data-id="${project.id}">Więcej</button>
        `;

        portfolioGallery.appendChild(projectDiv);
    });

    // Funkcja otwierająca modal
    const imageUrl = "../projekt_grafik/p1.jpg";
    const openModal = (project) => {
        modalImage.src = imageUrl;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modal.classList.add("visible");
    };

    // Nasłuchiwanie kliknięć na przyciskach "Więcej"
    portfolioGallery.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const projectId = event.target.getAttribute("data-id");
            const project = projects.find((proj) => proj.id === projectId);
            if (project) openModal(project);
        }
    });

    // Zamknięcie modal po kliknięciu na "X"
    closeButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    // Zamknięcie modal po kliknięciu poza treść modal
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.classList.remove("visible");
        }
    });
});
