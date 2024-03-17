class BankAccount {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
      this.balance += amount;
  }

  withdraw(amount: number): void {
      this.balance -= amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

class Account extends BankAccount {
  protected accType: string;
  protected accountNumber: number;

  constructor(accountNumber: number, accType: string, initialBalance: number) {
    super(initialBalance);
    this.accountNumber = accountNumber;
    this.accType = accType;
  }

  accountInfo(): void {
    console.log(`Account number ${this.accountNumber}, Type ${this.accType}, Balance $${this.getBalance()}`);
  }
}

class CheckingAccount extends Account {
  private overdraftLimit: number;

  constructor(accountNumber: number, initialBalance: number, accType: string, overdraftLimit: number) {
    super(accountNumber, accType, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  withdraw(amount: number): void {
    const availableBalance = this.getBalance() + this.overdraftLimit;

    if (amount > 0 && amount <= availableBalance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount} successfully. New balance: $${this.getBalance()}`);
    } else {
      console.log("Invalid withdrawal amount or exceeds overdraft limit.");
    }
  }

  checkingAccountInfo(): void {
    console.log(`Checking Account - Account number ${this.accountNumber}, Overdraft Limit $${this.overdraftLimit}, Balance $${this.getBalance()}`);
  }
}


const checkingAccount = new CheckingAccount(789012, 500, 'Checking', 200);

console.log(`Initial balance: $${checkingAccount.getBalance()}`);
checkingAccount.deposit(300);
checkingAccount.withdraw(700); 
checkingAccount.checkingAccountInfo();




const account = new Account(123456, 'Savings', 1000);

console.log(`Initial balance: $${account.getBalance()}`);
account.deposit(500);
account.withdraw(200);
account.accountInfo();

export {}
