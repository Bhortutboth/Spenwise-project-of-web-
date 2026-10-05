// ==========================================
// SpendWise - JavaScript Foundation
// ==========================================

// 1. Store Application Data

// Budget variable
let budget = 0;

// Expense variables
let food = 0;
let transport = 0;
let rent = 0;
let entertainment = 0;
let savings = 0;
let utilities = 0;

// Total expenses
let totalExpenses = 0;

// Remaining balance
let remainingBalance = 0;


// ==========================================
// 2. Create Reusable Functions
// ==========================================

// Function to calculate total expenses
function calculateTotalExpenses() {
    return food + transport + rent + entertainment + savings + utilities;
}


// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}


// Function to display budget results
function displayResults() {

    // Calculate total expenses
    totalExpenses = calculateTotalExpenses();

    // Calculate remaining balance
    remainingBalance = calculateBalance(budget, totalExpenses);

    // Display results in the browser console
    console.log("========== SpendWise Budget Summary ==========");
    console.log("Total Budget: KSh " + budget);
    console.log("Total Expenses: KSh " + totalExpenses);
    console.log("Remaining Balance: KSh " + remainingBalance);
    console.log("==============================================");

    // Display results on the webpage
    document.getElementById("budget-display").textContent =
        "KSh " + budget.toFixed(2);

    document.getElementById("expense-display").textContent =
        "KSh " + totalExpenses.toFixed(2);

    document.getElementById("balance-display").textContent =
        "KSh " + remainingBalance.toFixed(2);
}


// ==========================================
// 3. Collect User Input
// ==========================================

function getBudgetInformation() {

    // Ask user for their budget
    budget = Number(prompt("Enter your total budget in KSh:"));

    // Ask user for expenses
    food = Number(prompt("Enter your Food expense:"));

    transport = Number(prompt("Enter your Transport expense:"));

    rent = Number(prompt("Enter your Rent expense:"));

    entertainment = Number(
        prompt("Enter your Entertainment expense:")
    );

    savings = Number(prompt("Enter your Savings amount:"));

    utilities = Number(prompt("Enter your Utilities expense:"));

    // Display the results
    displayResults();
}


// ==========================================
// 4. Connect Button to JavaScript
// ==========================================

const startButton = document.getElementById("start-budget-btn");

startButton.addEventListener("click", function () {

    getBudgetInformation();

});