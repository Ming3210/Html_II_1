class Account {
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

class SavingsAccount extends Account{
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

let sAcc = new SavingsAccount(1,100,10)

console.log(sAcc);
sAcc.deposit(100)
sAcc.withdraw(210)
console.log(sAcc);
sAcc.calculateInterest()
