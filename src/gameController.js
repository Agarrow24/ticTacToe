import * as game from './game';

const plate = game.initPlate();
const joueur = [];
const partie = [];

function setPseudo(pseudo) {
    if (joueur.indexOf(pseudo) < 0) {
        joueur.push(pseudo);
    }
}

function setNumPartie(numPartie) {
    if (partie.indexOf(numPartie) < 0) {
        partie.push(numPartie);
    }
}

function play()
{
    var joueurs = ['❌', '➰'];
    var tour = 0;
    var gameOver = false;

    console.log("Le jeu peut commencer ! <br /> Joueur " + joueurs[tour] + " c'est votre tour.");
    for (var i = 0; i<10; i++) { // Pour 10 tours, inversion des rôles avant game over
        if (gameOver) {
            return;
        }

        if (!game.isCoordValid(this)) {
            console.log("Veuillez saisir les bonnes coordonnées !");
        }
        else if (!game.isCaseEmpty(this)) {
            console.log("Cette case est occupée !");
        }
        else
        {
            game.setSign(this, joueurs[tour]);
            gameOver = game.isThereAWinner(plate, joueurs, tour);

            if (gameOver) {
                console.log("Le joueur " + joueurs[tour] + " a gagné ! <br /> <a href=\"./\">Rejouer</a>");
                return;
            }

            if (game.isGameNull(plate)) {
                console.log("C'est un match Nul ! <br/> <a href=\"./\">Rejouer</a>");
                return;
            }

            tour++;
            console.log("Joueur " + joueurs[tour] + " c'est à vous !");
        }
    }
}

export {
    setPseudo,
    setNumPartie,
    play,
}