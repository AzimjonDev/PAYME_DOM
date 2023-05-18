import { Card } from './../user/card';


export class CardService{
    private cardList: Card[] = [];
    private id: number = 0;
    
    create(card: Card){
        if(this.isExist(card.cardNumber, card.password)){
            throw new Error("Bunday card bor");
        }
        else{
            card.setID(++this.id);
            this.cardList.push(card);
        }
    }
    
    isExist(cardNumber: string, password: number){
        for(let card of this.cardList){
            if(card.cardNumber == cardNumber && card.password == password){
                return true;
            }
            return false;
        }
    }
    
    getList(){
        return this.cardList;
    }
}