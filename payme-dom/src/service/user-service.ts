import { User } from "../user/user";

export class UserService{
    private userList: User[] = [];
    private id: number = 0;
    
    create(user: User){
        if(this.isExist(user.phoneNumber, user.password)){
            throw new Error("Bunday user bor");
        }
        else{
            user.setID(++this.id);
            this.userList.push(user);
        }
    }
    
    isExist(phoneNumber: string, password: number){
        for(let user of this.userList){
            if(user.phoneNumber == phoneNumber && user.password == password){
                return true;
            }
            return false;
        }
    }
    
    getID(){
        return this.id;
    }
    
    getList(){
        return this.userList;
    }
    

}