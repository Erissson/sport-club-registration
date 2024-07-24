const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function generatePDF(userData, outputPath) {
    const doc = await PDFDocument.create();

    
const page1 = doc.addPage();
    page1.drawText('Fiche adhérent', { x: 50, y: 750, size: 22 });
    page1.drawText(`Nom: ${userData.nom}`, { x: 50, y: 700, size: 14 });
    page1.drawText(`Prénom: ${userData.prenom}`, { x: 50, y: 680, size: 14 });
    page1.drawText(`Civilité: ${userData.civilite}`, { x: 50, y: 640, size: 14 });
    page1.drawText(`Date de Naissance: ${userData.dateDeNaissance}`, { x: 50, y: 620, size: 14 });
    page1.drawText(`Localisation: ${userData.localisation}`, { x: 50, y: 600, size: 14 });
    page1.drawText(`Code postale: ${userData.codePostale}`, { x: 50, y: 580, size: 14 });
    page1.drawText(`Ville: ${userData.Ville}`, { x: 50, y: 560, size: 14 });
    page1.drawText(`Email: ${userData.email}`, { x: 50, y: 540, size: 14 });
    page1.drawText(`Tél: ${userData.tel}`, { x: 350, y: 540, size: 14 });
    page1.drawText(`Dojo: ${userData.DojoOption}`, { x: 50, y: 520, size: 14 });
    page1.drawText(`Option de Paiement: ${userData.paiementOption}`, { x: 50, y: 500, size: 14 });
    page1.drawText(`CGA: ${userData.CGA}`, { x: 50, y: 480, size: 14 });
    
    const page2 = doc.addPage();
    page2.drawText('Fiche représentant 1', { x: 50, y: 750, size: 22 });
    page2.drawText(`Nom: ${userData.REP1_nom}`, { x: 50, y: 700, size: 14 });
    page2.drawText(`Prénom: ${userData.REP1_prenom}`, { x: 50, y: 680, size: 14 });
    page2.drawText(`Parent: ${userData.Parent1}`, { x: 50, y: 660, size: 14 });
    page2.drawText(`Localisation: ${userData.REP1_adresse}`, { x: 50, y: 640, size: 14 });
    page2.drawText(`Code postale: ${userData.REP1_codePostale}`, { x: 50, y: 620, size: 14 });
    page2.drawText(`Ville: ${userData.REP1_Ville}`, { x: 50, y: 600, size: 14 });
    page2.drawText(`Email: ${userData.REP1_email}`, { x: 50, y: 580, size: 14 });
    page2.drawText(`Tél: ${userData.REP1_tel}`, { x: 350, y: 580, size: 14 });

    const page3 = doc.addPage();
    page3.drawText('Fiche représentant 2', { x: 50, y: 750, size: 22 });
    page3.drawText(`Nom: ${userData.REP2_nom}`, { x: 50, y: 700, size: 14 });
    page3.drawText(`Prénom: ${userData.REP2_prenom}`, { x: 50, y: 680, size: 14 });
    page3.drawText(`Parent: ${userData.Parent2}`, { x: 50, y: 660, size: 14 });
    page3.drawText(`Localisation: ${userData.REP2_adresse}`, { x: 50, y: 640, size: 14 });
    page3.drawText(`Code postale: ${userData.REP2_codePostale}`, { x: 50, y: 620, size: 14 });
    page3.drawText(`Ville: ${userData.REP2_Ville}`, { x: 50, y: 600, size: 14 });
    page3.drawText(`Email: ${userData.REP2_email}`, { x: 50, y: 580, size: 14 });
    page3.drawText(`Tél: ${userData.REP2_tel}`, { x: 350, y: 580, size: 14 });
    
    const pdfBytes = await doc.save();
    fs.writeFileSync(outputPath, pdfBytes);
}



module.exports = { generatePDF };