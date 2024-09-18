import { Address } from "./Address";


export class Account{
    accountnumber:string;
    name:string;
    pan:string;
    balance:number;
    mobile:string;
    address:Address;

    constructor(accountnumber:string,name:string,pan:string,balance:number,mobile:string,address:Address){
        this.accountnumber=accountnumber;
        this.balance=balance;
        this.mobile=mobile;
        this.name=name;
        this.pan=pan;
        this.address=address;
    }
}