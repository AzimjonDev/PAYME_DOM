
// export type CARD_NAME = "HUMO" | "UZCARD" | "MASTER_CARD";

export class Card {
    private ID: number;
    constructor(public firsName: string, public lastName: string, public cardType: string, public cardNumber: string, public password: number, public cardDate: string){}
    
    getID(){
        return this.ID;
    }
    
    setID(value: number){
        this.ID = value;
    }
}