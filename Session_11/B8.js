"use strict";
class Account1 {
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
class CheckingAccount extends Account1 {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw1(value) {
        if (this.balance > this.overdraftLimit) {
            this.balance -= value;
        }
        return this.balance;
    }
}
class SavingsAccount1 extends Account1 {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        console.log(this.balance * this.interestRate / 100);
        this.balance = this.balance + (this.balance * this.interestRate / 100);
    }
}
let sAcc1 = new SavingsAccount1(1, 100, 10);
console.log(sAcc1);
sAcc1.deposit(100);
sAcc1.withdraw(210);
console.log(sAcc1);
sAcc1.calculateInterest();
let cAcc = new CheckingAccount(1, 200, -2000);
console.log(cAcc.withdraw1(1700));
