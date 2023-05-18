export class User {
    firstName;
    lastName;
    phoneNumber;
    password;
    ID = 0;
    constructor(firstName, lastName, phoneNumber, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
    getID() {
        return this.ID;
    }
    setID(value) {
        this.ID = value;
    }
}
