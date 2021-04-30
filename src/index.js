// Affichage d'un tableau
// Init du tableau
const plate = [
  ['.','.','.'],
  ['.','.','.'],
  ['.','.','.'],
];

// Tableau joueurs
const players = [
  { name: 'player1', sign: 'x' },
  { name: 'player2', sign: 'o' },
];

let joueurCourant = "X";
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// Affichage du tableau
function printPlate(plate) {
  plate.forEach((line) => console.log(line));
}

// Init questions
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Choix cases
printPlate(plate) // Affiche tableau avec case remplie
console.log(`Au tour de joueur1 !`);
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

// Vérifications si le tableau est vide
function isEmpty(plate, x, y) {
   if (plate[x][y] != 0) {
     throw new Error('Case is not empty');
   }   
};

function isAlign(plate, x, y) {
  // possible horizontal alignments
  if(plate[0][0] == 'x' && plate[1][0] == 'x' && plate[2][0] == 'x'){
    console.log(`Joueur MACHIN a gagné !`);
    rl.close();
  }
  checkSet.clear();
  if(plate[0][1] && plate[1][1] && plate[2][1]){
    console.log(`Joueur MACHIN a gagné !`);
    rl.close();
  }
  checkSet.clear();
  if(plate[0][2] && plate[1][2] && plate[2][2]){
    console.log(`Joueur MACHIN a gagné !`);
    rl.close();
  }
  checkSet.clear();
  // possible vertical alignments
  if(plate[0][0] && plate[0][1] && plate[0][2]){
    console.log(`Joueur MACHIN a gagné !`);
    rl.close();
  }
  checkSet.clear();
  if(plate[1][0] && plate[1][1] && plate[2][2]){
    console.log(`Joueur MACHIN a gagné !`);
    rl.close();
  }
  checkSet.clear();
  if(plate[2][0] && plate[2][1] && plate[2][2]){
    console.log(`Joueur MACHIN a gagné !`);
    rl.close();
  }
  checkSet.clear();
  // possible diagonal alignments
  if(plate[0][0] && plate[1][1] && plate[2][2]){
    console.log(`Joueur MACHIN a gagné !`);
    rl.close();
  }
  checkSet.clear();
  if(plate[0][2] && plate[1][1] && plate[2][0]){
    console.log(`Joueur MACHIN a gagné !`);
    rl.close();
  }
  checkSet.clear();
}

// Nettoyage tableau
function clearBox(plate) {
  document.getElementById(plate).innerText="";
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusDisplay.innerHTML = currentPlayerTurn();
}

// ____________________________

// playAction(plate, x, y, sign) => plate

// commencer Partie
// while tableau pas rempli or pas alignement 3 cases{
// afficher tableau pour joueur 1
//   tour du joueur 1
//   remplie tableau
//   if (case pas 0){ // fonction isEmpty
//     redemande case à remplir
//   }
//   else {
//     remplacer dans la case par le signe du joueur
//     sauvegarde tableau
//   }
// afficher tableau pour joueur 2
//   tour du joueur 2
//   remplie tableau
//   if (case pas 0){ // fonction isEmpty
//     redemande case à remplir
//   }
//   else {
//     remplacer dans la case par le signe du joueur
//     sauvegarde tableau
//   }
// }

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