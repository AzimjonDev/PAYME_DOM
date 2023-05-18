export class User {
    private ID: number = 0;
    constructor(public firstName: string, public lastName:string,  public phoneNumber: string, public password: any){}
    
    getID(){
        return this.ID;
    }
    
    setID(value: number){
        this.ID = value;
    }
}