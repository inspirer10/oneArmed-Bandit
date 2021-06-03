let boost = 0;

class Result {
    static moneyWinInGame(resultOfTheGame, bet, boost) {
        if (resultOfTheGame == true) {
            return (bet * 2 * boost) / 2; //  BOOST
        } else {
            return 0;
        }
    }

    static checkIfWin(draw) {
        if (draw[0] === draw[1] && draw[1] === draw[2]) {
            boost += 1;
            return true;
        } else {
            return false;
        }
    }
}