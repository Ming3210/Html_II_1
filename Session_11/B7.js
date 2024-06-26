"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(value) {
        this.balance += value;
    }
    withdraw(value) {
        this.balance -= value;
        if (this.balance < 0) {
            this.balance += value;
            console.log("Insufficient balance");
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        console.log(this.balance * this.interestRate / 100);
        this.balance = this.balance + (this.balance * this.interestRate / 100);
    }
}
let sAcc = new SavingsAccount(1, 100, 10);
console.log(sAcc);
sAcc.deposit(100);
sAcc.withdraw(210);
console.log(sAcc);
sAcc.calculateInterest();
