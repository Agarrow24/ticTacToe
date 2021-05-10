const EMPTY_BOX = '.';

const X_SIGN = '❌';
const O_SIGN = '➰';

const PLATE_X_SIZE = 3;
const PLATE_Y_SIZE = 3;

const PLATE_SIZE = PLATE_X_SIZE * PLATE_Y_SIZE;

function isCoordValid(c) {
  return c >= 0 && c <= 2;
}

function getBoxIdFromXY(x, y) {
  return (x * PLATE_X_SIZE) + y;
}

function getBox(plate, x, y) {
  return plate[getBoxIdFromXY(x, y)];
}

function setBox(plate, x, y, sign) {
  const newPlate = plate;
  newPlate[getBoxIdFromXY(x, y)] = sign;
  return newPlate;
}

function printPlate(plate) {
  plate.forEach((box, i) => (((i + 1) % PLATE_X_SIZE)
    ? process.stdout.write(` ${box} `)
    : console.log(` ${box}\n`)));
}

function initPlate() {
  return [...Array(PLATE_SIZE).keys()].map(() => EMPTY_BOX);
}

function isCaseEmpty(plate, x, y) {
  return getBox(plate, x, y) === EMPTY_BOX;
}

function setSign(plate, x, y, sign) {
  return isCoordValid(x)
    && isCoordValid(y)
    && isCaseEmpty(plate, x, y)
    && setBox(plate, x, y, sign);
}

function isThereAWinner(plate, joueurs, tour) {
    // Horizontal
    if (plate[0].innerHTML == joueurs[tour] && plate[1].innerHTML == joueurs[tour] && plate[2].innerHTML == joueurs[tour])
    {
        return true;
    }
    if (plate[3].innerHTML == joueurs[tour] && plate[4].innerHTML == joueurs[tour] && plate[5].innerHTML == joueurs[tour])
    {
        return true;
    }
    if (plate[6].innerHTML == joueurs[tour] && plate[7].innerHTML == joueurs[tour] && plate[8].innerHTML == joueurs[tour])
    {
        return true;
    }

    // Vertical
    if (plate[0].innerHTML == joueurs[tour] && plate[3].innerHTML == joueurs[tour] && plate[6].innerHTML == joueurs[tour])
    {
        return true;
    }
    if (plate[1].innerHTML == joueurs[tour] && plate[4].innerHTML == joueurs[tour] && plate[7].innerHTML == joueurs[tour])
    {
        return true;
    }
    if (plate[2].innerHTML == joueurs[tour] && plate[5].innerHTML == joueurs[tour] && plate[8].innerHTML == joueurs[tour])
    {
        return true;
    }

    // Diagonales
    if (plate[0].innerHTML == joueurs[tour] && plate[4].innerHTML == joueurs[tour] && plate[8].innerHTML == joueurs[tour])
    {
        return true;
    }
    if (plate[2].innerHTML == joueurs[tour] && plate[4].innerHTML == joueurs[tour] && plate[6].innerHTML == joueurs[tour])
    {
        return true;
    }
}

function isGameNull(plate) {
  return !isThereAWinner(plate) && !plate.reduce((state, box) => box === EMPTY_BOX || state, false);
}

function myFunction() {
    document.getElementById("truc").innerHTML = O_SIGN;
    console.log("c'est po vrai");
}

// export {
//   isCaseEmpty,
//   isCoordValid,
//   getBoxIdFromXY,
//   getBox,
//   setBox,
//   printPlate,
//   initPlate,
//   setSign,
//   isGameNull,
//   isThereAWinner,
//   X_SIGN,
//   O_SIGN,
//   myFunction
// };

function play()
{
    var joueurs = ['❌', '➰'];
    var tour = 0;
    var gameOver = false;
    initPlate();
    console.log("Le jeu peut commencer ! <br /> Joueur " + joueurs[tour] + " c'est votre tour.");
    for (var i = 0; i<10; i++) { // Pour 10 tours, inversion des rôles avant game over
        if (gameOver) {
            return;
        }

        if (!isCoordValid(this)) {
            console.log("Veuillez saisir les bonnes coordonnées !");
        }
        else if (!isCaseEmpty(this)) {
            console.log("Cette case est occupée !");
        }
        else
        {
            setSign(this, joueurs[tour]);
            gameOver = isThereAWinner(plate, joueurs, tour);

            if (gameOver) {
                console.log("Le joueur " + joueurs[tour] + " a gagné ! <br /> <a href=\"./\">Rejouer</a>");
                return;
            }

            if (isGameNull(plate)) {
                console.log("C'est un match Nul ! <br/> <a href=\"./\">Rejouer</a>");
                return;
            }

            tour++;
            console.log("Joueur " + joueurs[tour] + " c'est à vous !");
        }
    }
}