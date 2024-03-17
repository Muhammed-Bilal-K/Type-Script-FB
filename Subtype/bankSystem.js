"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(accountNumber, accType, initialBalance) {
        var _this = _super.call(this, initialBalance) || this;
        _this.accountNumber = accountNumber;
        _this.accType = accType;
        return _this;
    }
    Account.prototype.accountInfo = function () {
        console.log("Account number ".concat(this.accountNumber, ", Type ").concat(this.accType, ", Balance $").concat(this.getBalance()));
    };
    return Account;
}(BankAccount));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountNumber, initialBalance, accType, overdraftLimit) {
        var _this = _super.call(this, accountNumber, accType, initialBalance) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw = function (amount) {
        var availableBalance = this.getBalance() + this.overdraftLimit;
        if (amount > 0 && amount <= availableBalance) {
            this.balance -= amount;
            console.log("Withdrawn $".concat(amount, " successfully. New balance: $").concat(this.getBalance()));
        }
        else {
            console.log("Invalid withdrawal amount or exceeds overdraft limit.");
        }
    };
    CheckingAccount.prototype.checkingAccountInfo = function () {
        console.log("Checking Account - Account number ".concat(this.accountNumber, ", Overdraft Limit $").concat(this.overdraftLimit, ", Balance $").concat(this.getBalance()));
    };
    return CheckingAccount;
}(Account));
var checkingAccount = new CheckingAccount(789012, 500, 'Checking', 200);
console.log("Initial balance: $".concat(checkingAccount.getBalance()));
checkingAccount.deposit(300);
checkingAccount.withdraw(700);
checkingAccount.checkingAccountInfo();
var account = new Account(123456, 'Savings', 1000);
console.log("Initial balance: $".concat(account.getBalance()));
account.deposit(500);
account.withdraw(200);
account.accountInfo();
