class Wallet {
    constructor(money) {
        let _money = money;
        // pobieranie aktualnej zawartośći portfela
        this.getWalletValue = () => _money;
        //sprawdzanie czy użytkownik ma wystarczająco dużo żetonów
        this.checkCanPlay = value => {
            if (_money >= value) {
                return true;
            } else {
                return false;
            }
        }

        //zmiana ilości żetonów
        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    return _money += value;
                } else if (type === '-') {
                    return _money -= value;
                }
            }
        }
    }
}