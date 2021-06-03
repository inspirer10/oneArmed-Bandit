class Game {
    constructor(start) {
        this.stats = new Stats();
        this.wallet = new Wallet(start);

        document.getElementById('start').addEventListener('click', this.startGame.bind(this));
        this.spanWallet = document.querySelector('.money');
        this.colors = document.querySelectorAll('div .color');
        this.input = document.getElementById('bid');
        this.resultOfTheRound = document.querySelector('.result');
        this.gamesCounter = document.querySelector('.counter');
        this.winsCounter = document.querySelector('.win');
        this.lossesCounter = document.querySelector('.lose');

        this.render()
    }

    render(colors = ['black', 'black', 'black'], money = this.wallet.getWalletValue(), stats = [0, 0, 0], result = 0, bet = 0, wonMoney = 0) {
        this.colors.forEach((color, i) => {
            color.style.backgroundColor = colors[i];
        });

        this.spanWallet.textContent = money;

        if (result) {
            result = `Wygrałeś ${wonMoney} żetony! `;
        } else if (!result || result != '') {
            result = `Przegrałeś ${bet} żeton/y `;
        };

        this.gamesCounter.textContent = stats[0];
        this.winsCounter.textContent = stats[1];
        this.lossesCounter.textContent = stats[2];
        this.resultOfTheRound.textContent = result;
    }


    startGame() {
        if (this.input.value < 1) {
            this.input.value = '';
            return alert(`Podana liczba: ${this.input.value} jest zbyt mała`);
        };

        const bet = Math.floor(this.input.value);

        if (!this.wallet.checkCanPlay(bet)) {
            this.input.value = '';
            return alert(`Masz zbyt mało żetonów`);
        };

        this.wallet.changeWallet(bet, '-');
        this.input.value = '';


        this.draw = new Draw();
        const randomizedColors = this.draw.getDrawResult();
        const win = Result.checkIfWin(randomizedColors);
        const wonMoney = Result.moneyWinInGame(win, bet, boost);
        this.wallet.changeWallet(wonMoney);
        this.stats.addGameToStats(win, bet);

        this.render(randomizedColors, this.wallet.getWalletValue(), this.stats.showGameStats(), win, bet, wonMoney);
    }
}