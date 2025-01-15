const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const storage = multer.diskStorage({
    destination: './projekt_grafik',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

// Przechowywanie projektów
const projectsFile = './projects.json';

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint do pobierania projektów
app.get('/projects', (req, res) => {
    if (fs.existsSync(projectsFile)) {
        res.json(JSON.parse(fs.readFileSync(projectsFile)));
    } else {
        res.json([]);
    }
});

// Endpoint do dodawania projektów
app.post('/upload', upload.single('imageFile'), (req, res) => {
    const { title, description } = req.body;
    const imageUrl = `/projekt_grafik/${req.file.filename}`;

    const newProject = { title, description, imageUrl };
    let projects = [];

    if (fs.existsSync(projectsFile)) {
        projects = JSON.parse(fs.readFileSync(projectsFile));
    }

    projects.push(newProject);
    fs.writeFileSync(projectsFile, JSON.stringify(projects, null, 2));

    res.redirect('/admin.html');
});

// Uruchamianie serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
