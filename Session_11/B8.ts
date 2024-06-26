class Account1 {
    protected accountNumber :number;
    protected balance :number;
    constructor(accountNumber:number, balance:number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(value:number){
        this.balance += value;
    }
    withdraw(value:number):void{
        this.balance -= value;
        if(this.balance < 0){
            this.balance += value
            console.log("Insufficient balance");
        }
    }
}

class CheckingAccount extends Account1{
    private overdraftLimit:number;
    constructor(accountNumber:number,balance:number,overdraftLimit:number){
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw1(value: number): number {
        if(this.balance> this.overdraftLimit){
            this.balance -=value
            
        }
        return this.balance
    }
}

class SavingsAccount1 extends Account1{
    private interestRate :number;
    constructor(accountNumber:number, balance:number, interestRate:number){
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest():void{
        console.log(this.balance*this.interestRate/100)
        this.balance = this.balance + (this.balance*this.interestRate/100)
    }
}

let sAcc1 = new SavingsAccount1(1,100,10)

console.log(sAcc1);
sAcc1.deposit(100)
sAcc1.withdraw(210)
console.log(sAcc1);
sAcc1.calculateInterest()
let cAcc = new CheckingAccount(1,200,-2000)
console.log(cAcc.withdraw1(1700));
