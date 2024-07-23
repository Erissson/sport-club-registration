const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function generatePDF(userData, outputPath) {
    const doc = await PDFDocument.create();

    const page = doc.addPage();
    page.drawText('Fiche adhérent', { x: 50, y: 750, size: 22 });
    page.drawText(`Nom: ${userData.nom}`, { x: 50, y: 700, size: 14 });
    page.drawText(`Prénom: ${userData.prenom}`, { x: 50, y: 680, size: 14 });
    page.drawText(`Numéro de sécurité sociale: ${userData.secu}`, { x: 50, y: 660, size: 14 });
    page.drawText(`Civilité: ${userData.civilite}`, { x: 50, y: 640, size: 14 });
    page.drawText(`Date de Naissance: ${userData.dateDeNaissance}`, { x: 50, y: 620, size: 14 });
    page.drawText(`Localisation: ${userData.localisation}`, { x: 50, y: 600, size: 14 });
    page.drawText(`codePostale: ${userData.codePostale}`, { x: 50, y: 580, size: 14 });
    page.drawText(`Ville: ${userData.Ville}`, { x: 50, y: 560, size: 14 });
    page.drawText(`Email: ${userData.email}`, { x: 50, y: 540, size: 14 });
    page.drawText(`tel: ${userData.tel}`, { x: 350, y: 540, size: 14 });
    page.drawText(`Dojo: ${userData.DojoOption}`, { x: 50, y: 520, size: 14 });
    page.drawText(`Option de Paiement: ${userData.paiementOption}`, { x: 50, y: 500, size: 14 });
    if (userData.moisPaiement && userData.moisPaiement.length > 0) {
        page.drawText(`Mois de Paiement: ${userData.moisPaiement.join(', ')}`, { x: 50, y: 480, size: 14 });
    }

    doc.addPage();

    const pdfBytes = await doc.save();
    fs.writeFileSync(outputPath, pdfBytes);
}



module.exports = { generatePDF };
