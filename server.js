// Importowanie wymaganych modułów
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware do parsowania JSON w ciele żądania
app.use(express.json());

// Endpoint do pobierania projektów
app.get('/projects', (req, res) => {
    fs.readFile('projects.json', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error reading projects file' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint do dodawania nowego projektu
app.post('/projects', (req, res) => {
    const newProject = req.body;
    fs.readFile('projects.json', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error reading projects file' });
        } else {
            const projects = JSON.parse(data);
            projects.push(newProject);
            fs.writeFile('projects.json', JSON.stringify(projects), (err) => {
                if (err) {
                    res.status(500).json({ error: 'Error writing to projects file' });
                } else {
                    res.status(200).json({ message: 'Project added successfully' });
                }
            });
        }
    });
});

// Uruchomienie serwera na porcie 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});