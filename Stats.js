class Stats {
    constructor() {
        this.gameResults = [];
    }

    addGameToStats(win, bet) {
        let gameResult = {
            win,
            bet
        }
        this.gameResults.push(gameResult)
    }

    showGameStats() {
        let games = this.gameResults.length;
        let winsNumber = this.gameResults.filter(result => result.win).length;
        let lossesNumber = this.gameResults.filter(result => !result.win).length;
        return [games, winsNumber, lossesNumber];
    }
}