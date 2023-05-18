export class UserService {
    userList = [];
    id = 0;
    create(user) {
        if (this.isExist(user.phoneNumber, user.password)) {
            throw new Error("Bunday user bor");
        }
        else {
            user.setID(++this.id);
            this.userList.push(user);
        }
    }
    isExist(phoneNumber, password) {
        for (let user of this.userList) {
            if (user.phoneNumber == phoneNumber && user.password == password) {
                return true;
            }
            return false;
        }
    }
    getID() {
        return this.id;
    }
    getList() {
        return this.userList;
    }
}
