// MES IMPORTS
import Malade from './malades.js'
import {Doctor,  cimetiere} from "./doctor.js"
import Lieu from "./lieu.js"
// MES MALADES
let marcus = new Malade("Marcus", "mal indenté", 100 , [] ,"malade",'')
let optiumus = new Malade('Optimus', "unsave",200,[],"malade",'')
let sangoku = new Malade('Sangoku',"404", 80,[],"malade",'')
let darthVader = new Malade('DarthVader' , "azmatique" , 110 , [] , "malade",'')
let semicolon = new Malade('SemiColon' , "syntaxError" , 60 , [] , "malade","")
let maboul = new Doctor('DEBUGGER' , 0 , ["Chat"] , [])
let patient = [marcus,optiumus,sangoku,darthVader,semicolon]
maboul.salleAttente.push(marcus.nom,optiumus.nom,sangoku.nom,darthVader.nom,semicolon.nom)
let chat = { nom : "chat ", bruit : "MiaaaaaaaaaW"}
let index = 0


console.log("Il y a dans ma salle d'attente : " , patient.length , "personnes")
while(index<maboul.salleAttente.length){ 

patient.forEach(element => {
    console.log("/////////////////")
    maboul.patienTin(element)
    console.log("/////////////////")
    console.log("Il y dans le cabinet : " , element.nom)
    console.log("/////////////////")
    maboul.diagnostique(element)
    console.log("/////////////////")
    maboul.salleAttente.shift()
    console.log("Il reste donc au souffrant  : " , element.argent)
    console.log("/////////////////")
    element.payer(element)
    console.log("/////////////////")
    maboul.patientOut(element)
    console.log("/////////////////")
    element.seDeplacer(element)
    console.log("/////////////////")
    console.log(element.nom, "a dans poche : ", element.poche)
    console.log("/////////////////")
    console.log("Il reste dans ma salle d'attente  :  " , maboul.salleAttente.length)
});
setTimeout(() => {
    

let create = document.createElement('div')
document.body.appendChild(create)
create.innerHTML = "Docteur Debugger a finis sa journée , il peut enfin rentrer chez lui & retrouver sa petite famille"
create.style.position="absolute"
create.style.fontSize="50px"
create.style.width = "300"
create.style.top = "50%"
create.style.left ="50%"
create.style.transform = "translate(-50%,-50%)"
create.style.border ='5px black solid'
create.style.padding= "100px"
create.style.backgroundColor = "lightblue"
let create_image = new Image (500,500)
create_image.style.borderRadius = "250px"
create_image.src="https://pbs.twimg.com/profile_images/1351595270690242566/ga42sLdP_400x400.jpg"
let create_image2 = new Image (500,500)
create_image2.src="https://pbs.twimg.com/profile_images/1351595270690242566/ga42sLdP_400x400.jpg"
create_image2.style.left = "0%"
document.body.style.backgroundColor="orange"
document.body.appendChild(create_image)
// create_image.style.top="0%"
}, 1500);

}



setInterval(() => {
    console.error(chat.bruit)
}, 2000);



console.log('Snif ... Il y a dans mon cimetière  : ' , cimetiere)
console.log("Docteur Debugger s'est fait aujourd'hui ", maboul.argent , "euros. Ca paye bien !")