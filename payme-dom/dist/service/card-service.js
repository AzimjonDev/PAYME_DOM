export class CardService {
    cardList = [];
    id = 0;
    create(card) {
        if (this.isExist(card.cardNumber, card.password)) {
            throw new Error("Bunday card bor");
        }
        else {
            card.setID(++this.id);
            this.cardList.push(card);
        }
    }
    isExist(cardNumber, password) {
        for (let card of this.cardList) {
            if (card.cardNumber == cardNumber && card.password == password) {
                return true;
            }
            return false;
        }
    }
    getList() {
        return this.cardList;
    }
}
