
/* --- Account object constructor --- */
function Account(name){
    this.name = name;
    this.balance = 0;
    
    this.deposit = function deposit (amount) {
        if (typeof amount === "number" ) {
            this.balance += amount;
        } else {
            console.log("-- DEPOSIT IS CANCELLED --");
            console.log("The amount provided is not a number.");
            console.log("The type of the given parameter is: " + typeof amount + ".");
        }	
    };
    
    this.withdraw = function withdraw (amount) {
        if (typeof amount === "number" ) {
            this.balance -= amount;
        } else {
            console.log("-- WITHDRAW IS CANCELLED --");
            console.log("The amount provided is not a number.");
            console.log("The type of the given parameter is: " + typeof amount + ".");
        }	
    };
}

/* --- Function that calls the constructor and stores the account in the collection --- */
function createAccount(account) {
	accounts.push(account);
	return account;
}

/* --- Function that will return the asked object from the accounts array based on the username --- */
function getAccount(username) {
	var matchedAccount;

	accounts.forEach( function (internal_account) {
		if (internal_account.name === username) {
			matchedAccount = internal_account;
		}
	} );

	return matchedAccount;
}

/* --- Function that returns an anonymous function that returns the balance --- */
function getBalance() {
    return function(account){
        console.log("The balance of user " + account.name + " is " + account.balance + " euros.");
        return account.balance;
    };
}

/* --- Testing --- */
var accounts = [ ];
var getBalanceVar = getBalance();

createAccount(new Account("Wouter"));
createAccount(new Account("Harry Potter"));
getAccount("Wouter").deposit(150);
getAccount("Harry Potter").deposit(50);
getAccount("Harry Potter").withdraw(20);
getAccount("Harry Potter").withdraw("notanumber");

console.log(accounts);

getBalanceVar(getAccount("Harry Potter"));