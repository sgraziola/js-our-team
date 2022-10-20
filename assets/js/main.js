/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

DATI FORNITI:
Name: Wayne Barnett
Role: Founder & CEO
Image: wayne-barnett-founder-ceo.jpg
___________________________________
Name: Angela Caroll
Role: Chief Editor
Image: angela-caroll-chief-editor.jpg
____________________________________
Name: Walter Gordon
Role: Office Manager
Image: walter-gordon-office-manager.jpg
____________________________________
Name: Angela Lopez
Role: Social Media Manager
Image: angela-lopez-social-media-manager.jpg
_________________________________
Name: Scott Estrada
Role: Developer
Image: scott-estrada-developer.jpg
_________________________________
Name: Barbara Ramos
Role: Grafic Designer
Image: barbara-ramos-graphic-designer.jpg

MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1: Trasformare la stringa foto in una immagine effettiva
BONUS 2: Organizzare i singoli membri in card/schede
 */

//creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
const ourTeam = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "./assets/img/wayne-barnett-founder-ceo.jpg",
    },

    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "./assets/img/angela-caroll-chief-editor.jpg",
    },
    
    {
        name: "Wayne Gordon",
        role: "Office Manager",
        image: "./assets/img/walter-gordon-office-manager.jpg",
    },

    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "./assets/img/angela-lopez-social-media-manager.jpg",
    },
    
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "./assets/img/scott-estrada-developer.jpg",
    },
    
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "./assets/img/barbara-ramos-graphic-designer.jpg",
    },
];

console.log(ourTeam);