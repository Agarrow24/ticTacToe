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

// init questions
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Choix cases
rl.question("Choisis la coordonée x : ", function(NumberX) {
    if (NumberX<0 || NumberX>2) {
      throw new Error('Le nombre doit être entre 0 et 2');
    }
    rl.question("Choisis la coordonée y : ", function(NumberY) {
        if (NumberY<0 || NumberY>2) {
          throw new Error('Le nombre doit être entre 0 et 2');
        }
        console.log(`Tu as joué en ${NumberX} : ${NumberY} !`);
        plate[NumberY][NumberX] = 'x'; // Case remplie
        printPlate(plate) // Affiche tableau avec case remplie
        rl.close();
    });
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