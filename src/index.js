// Affichage d'un tableau
// Init du tableau
const plate = [
  [0,0,0],
  [0,0,0],
  [0,0,0],
];

// Affichage du tableau
function printPlate(plate) {
  plate.forEach((line) => console.log(line));
}

// Choix case
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Annonce case choisie
readline.question('A toi de jouer ! ', Number => {
  if (Number<1 || Number>9) {
    throw new Error('Le nombre doit être entre 1 et 9');
  }
  console.log(`Tu as joué en ${Number} !`);
  plate[1][2] = 'x';
  printPlate(plate)
  readline.close();
});

// ____________________________
// plate[1][1] = 'x';

// playAction(plate, x, y, sign) => plate

// Exemple :
// function playAction(plate, x, y, sign) {
//   checkCoord(x, y);
//   checkSign(sign);
//   isEmpty(plate, x, y); si pas libre, throw et renvoi la demande de remplissage de case
//   plate[x][y] = sign;

// return plate;
// }

// function isEmpty(plate, x, y) {
//   if (plate[x][y] != 0) {
//     throw new Error('Case is not empty');
//   }   
// }