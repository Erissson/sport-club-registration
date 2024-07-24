const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { generatePDF } = require('./generatePDF');
const { addUserToExcel } = require('./addUserToExcel');

const app = express();
const port = 3000;

const pdfDir = path.join(__dirname, 'public', 'pdfs');
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
}

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.post('/submit', upload.single('file'), (req, res) => {
    const { nom, prenom, secu, civilite, dateDeNaissance, localisation, codePostale, Ville, email, tel,DojoOption, paiementOption, CGA,REP1_nom,REP1_prenom,Parent1,REP1_adresse,REP1_codePostale,REP1_Ville,REP1_email,REP1_tel,REP2_nom,REP2_prenom,Parent2,REP2_adresse,REP2_codePostale,REP2_Ville,REP2_email,REP2_tel, } = req.body;
    const file = req.file;

    const userData = {
        nom,
        prenom,
        secu,
        civilite,
        dateDeNaissance,
        localisation,
        codePostale,
        Ville,
        email,
        tel,
        DojoOption,
        paiementOption,
        CGA,
        REP1_nom,
        REP1_prenom,
        Parent1,
        REP1_adresse,
        REP1_codePostale,
        REP1_Ville,
        REP1_email,
        REP1_tel,
        REP2_nom,
        REP2_prenom,
        Parent2,
        REP2_adresse,
        REP2_codePostale,
        REP2_Ville,
        REP2_email,
        REP2_tel,
        filePath: file ? file.path : null
    };

    const pdfPath = path.join(pdfDir, `inscription_${nom}-${prenom}.pdf`);
    
    generatePDF(userData, pdfPath)
        .then(() => {
            return addUserToExcel(userData);
        })
        .then(() => {
            res.redirect('/success.html');
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Erreur lors de la génération du PDF ou de l\'enregistrement des données.');
        });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
