const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Konfiguracja multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './projekt_grafik'); // Folder docelowy
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Unikalna nazwa pliku
    }
});
const upload = multer({ storage: storage });

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Obsługa przesyłania plików
app.post('/upload', upload.single('imageFile'), (req, res) => {
    const { title, description } = req.body;
    const imageUrl = `/projekt_grafik/${req.file.filename}`;
    
    // Możesz tutaj dodać logikę zapisu informacji do bazy danych
    console.log(`Dodano projekt: ${title}, ${description}, ${imageUrl}`);
    
    res.redirect('/admin.html'); // Powrót do panelu
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na porcie ${PORT}`);
});
