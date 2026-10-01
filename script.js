// SpendWise - JavaScript Foundation

// 1. Store application data using variables
let budget = 0;
let expenses = 0;
let remainingBalance = 0;


// 2. Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// 3. Function to collect user input and process the budget
function startBudget() {

    // Collect budget information from the user
    let budgetInput = prompt("Enter your monthly budget:");

    // Convert the input from text to a number
    budget = Number(budgetInput);

    // Collect expense information from the user
    let expenseInput = prompt("Enter your total expenses:");

    // Convert the input from text to a number
    expenses = Number(expenseInput);

    // Check that the values are valid
    if (isNaN(budget) || isNaN(expenses)) {
        console.log("Error: Please enter valid numbers.");
        return;
    }

    // Perform the budget calculation
    remainingBalance = calculateBalance(budget, expenses);

    // Display clearly labeled results in the console
    console.log("===== SpendWise Budget Report =====");
    console.log("Monthly Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + expenses);
    console.log("Remaining Balance: KSh " + remainingBalance);

    // Give the user a spending status
    if (remainingBalance > 0) {
        console.log("Status: You still have money remaining.");
    } else if (remainingBalance === 0) {
        console.log("Status: Your budget has been fully used.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("==================================");
}


// Test the calculation function
let testBalance = calculateBalance(40000, 12000);

console.log("Test Calculation:");
console.log("Budget: KSh 40000");
console.log("Expenses: KSh 12000");
console.log("Remaining Balance: KSh " + testBalance);