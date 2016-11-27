
var accounts = [ ];

function createAccount (account) {
	accounts.push(account);
	return account;
}

function getAccount (username) {
	var matchedAccount;

	accounts.forEach( function (internal_account) {
		if (internal_account.username === username) {
			matchedAccount = internal_account;
		}
	} );

	return matchedAccount;
}

function deposit (account, amount) {
    if (typeof amount === "number" ) {
        account.balance += amount;
    } else {
        console.log("-- DEPOSIT IS CANCELLED --");
        console.log("The amount provided is not a number.");
        console.log("The type of the amount parameter is: " + typeof amount + ".");
    }	
}

function withdraw (account, amount) {
    if (typeof amount === "number" ) {
        account.balance -= amount;
    } else {
        console.log("-- WITHDRAW IS CANCELLED --");
        console.log("The amount provided is not a number.");
        console.log("The type of the amount parameter is: " + typeof amount + ".");
    }	
}

/* Oude getBalance function
function getBalance (account) {
	return account.balance;
}
*/

function getBalance() {
    return function(account){
        return account.balance;
    };
}

var andrewsAccount = createAccount({
	username: 'Andrew',
	balance: 0
});

deposit(andrewsAccount, 100);
console.log(getBalance(andrewsAccount));

withdraw(andrewsAccount, 11);
console.log(getBalance(andrewsAccount));

var existingAccount = getAccount('Andrew');
console.log(getBalance(andrewsAccount));

var jensAccount = createAccount({
	username: 'jen001',
	balance: 12
});

console.log(accounts);

var exitingJensAccount = getAccount('jen001');
console.log(exitingJensAccount);

/* TESTING PRACTICE 3 */

/* Validatie deposit en withdraw */

deposit(andrewsAccount, 100);
console.log(getBalance(andrewsAccount));

deposit(andrewsAccount, "honderd");

withdraw(andrewsAccount, 5);
console.log(getBalance(andrewsAccount));

withdraw(andrewsAccount, "vijf");

/* Nieuwe getBalance function */

var wouterAccount = createAccount({
	username: 'Wouter',
	balance: 5000
});

var getBalance = getBalance();

console.log(getBalance(andrewsAccount));
console.log(getBalance(wouterAccount));


