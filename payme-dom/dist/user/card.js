// export type CARD_NAME = "HUMO" | "UZCARD" | "MASTER_CARD";
export class Card {
    firsName;
    lastName;
    cardType;
    cardNumber;
    password;
    cardDate;
    ID;
    constructor(firsName, lastName, cardType, cardNumber, password, cardDate) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.cardType = cardType;
        this.cardNumber = cardNumber;
        this.password = password;
        this.cardDate = cardDate;
    }
    getID() {
        return this.ID;
    }
    setID(value) {
        this.ID = value;
    }
}
