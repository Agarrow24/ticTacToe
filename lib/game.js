"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCaseEmpty = isCaseEmpty;
exports.isCoordValid = isCoordValid;
exports.getBoxIdFromXY = getBoxIdFromXY;
exports.getBox = getBox;
exports.setBox = setBox;
exports.printPlate = printPlate;
exports.initPlate = initPlate;
exports.setSign = setSign;
exports.isGameNull = isGameNull;
exports.isThereAWinner = isThereAWinner;
exports.O_SIGN = exports.X_SIGN = void 0;
const EMPTY_BOX = '.';
const X_SIGN = '❌';
exports.X_SIGN = X_SIGN;
const O_SIGN = '➰';
exports.O_SIGN = O_SIGN;
const PLATE_X_SIZE = 3;
const PLATE_Y_SIZE = 3;
const PLATE_SIZE = PLATE_X_SIZE * PLATE_Y_SIZE;

function isCoordValid(c) {
  return c >= 0 && c <= 2;
}

function getBoxIdFromXY(x, y) {
  return x * PLATE_X_SIZE + y;
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
  plate.forEach((box, i) => (i + 1) % PLATE_X_SIZE ? process.stdout.write(` ${box} `) : console.log(` ${box}\n`));
}

function initPlate() {
  return [...Array(PLATE_SIZE).keys()].map(() => EMPTY_BOX);
}

function isCaseEmpty(plate, x, y) {
  return getBox(plate, x, y) === EMPTY_BOX;
}

function setSign(plate, x, y, sign) {
  return isCoordValid(x) && isCoordValid(y) && isCaseEmpty(plate, x, y) && setBox(plate, x, y, sign);
}

function isThereAWinner(plate, joueurs, tour) {
  // Horizontal
  if (plate[0].innerHTML == joueurs[tour] && plate[1].innerHTML == joueurs[tour] && plate[2].innerHTML == joueurs[tour]) {
    return true;
  }

  if (plate[3].innerHTML == joueurs[tour] && plate[4].innerHTML == joueurs[tour] && plate[5].innerHTML == joueurs[tour]) {
    return true;
  }

  if (plate[6].innerHTML == joueurs[tour] && plate[7].innerHTML == joueurs[tour] && plate[8].innerHTML == joueurs[tour]) {
    return true;
  } // Vertical


  if (plate[0].innerHTML == joueurs[tour] && plate[3].innerHTML == joueurs[tour] && plate[6].innerHTML == joueurs[tour]) {
    return true;
  }

  if (plate[1].innerHTML == joueurs[tour] && plate[4].innerHTML == joueurs[tour] && plate[7].innerHTML == joueurs[tour]) {
    return true;
  }

  if (plate[2].innerHTML == joueurs[tour] && plate[5].innerHTML == joueurs[tour] && plate[8].innerHTML == joueurs[tour]) {
    return true;
  } // Diagonales


  if (plate[0].innerHTML == joueurs[tour] && plate[4].innerHTML == joueurs[tour] && plate[8].innerHTML == joueurs[tour]) {
    return true;
  }

  if (plate[2].innerHTML == joueurs[tour] && plate[4].innerHTML == joueurs[tour] && plate[6].innerHTML == joueurs[tour]) {
    return true;
  }
}

function isGameNull(plate) {
  return !isThereAWinner(plate) && !plate.reduce((state, box) => box === EMPTY_BOX || state, false);
}