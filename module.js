let contenu = 'ceci est un test'
const fs = require ('fs')

// fs.appendFileSync('test.txt','  ajouter du texte')
// fs.openSync('test.txt')

// exo 
// 1- appendFileSync
// 2- ouvrez le ficher
let a = 15
let b = 10
let calcul = require("./calcul.js")
console.log(calcul.addition(a,b))
console.log(calcul.soustraction(a,b))
console.log(calcul.multiplication(a,b))
console.log(calcul.division(a,b))
contenu={
    addition: calcul.addition(a,b),
    soustraction: calcul.soustraction(a,b),
    multiplication: calcul.multiplication(a,b),
    division: calcul.division(a,b)
}
fs.readFileSync('resultat.json')