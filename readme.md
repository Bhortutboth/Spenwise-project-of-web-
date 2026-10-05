# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a personal budget and expense tracking application. The project helps users enter their budget and different expenses and then calculates their total spending and remaining balance.

This Week 6 version introduces JavaScript to make the SpendWise dashboard interactive and able to process financial data.

## JavaScript Concepts Implemented

The project demonstrates the following JavaScript concepts:

* Variables
* Data types
* User input
* Number conversion
* Arithmetic calculations
* Functions
* Event listeners
* DOM manipulation
* Console output

## How Variables Are Used

Variables are used to store important budgeting information.

For example:

```javascript
let budget = 0;
let food = 0;
let transport = 0;
let rent = 0;
let entertainment = 0;
let savings = 0;
let utilities = 0;
```

These variables store the budget and expense information provided by the user.

## How User Input Is Collected

SpendWise collects information from the user using JavaScript `prompt()`.

For example:

```javascript
budget = Number(prompt("Enter your total budget in KSh:"));
```

The user enters their budget and expenses through prompts.

The `Number()` function converts the input into a number so that JavaScript can perform calculations.

## How Calculations Are Performed

SpendWise calculates the total expenses by adding all expense categories together.

```javascript
function calculateTotalExpenses() {
    return food + transport + rent + entertainment + savings + utilities;
}
```

The remaining balance is calculated by subtracting total expenses from the budget.

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

The formula is:

**Remaining Balance = Total Budget - Total Expenses**

## How Functions Help Organize the Code

Functions help organize the application by placing related tasks into reusable blocks of code.

The `calculateTotalExpenses()` function calculates all expenses, while the `calculateBalance()` function calculates the remaining budget.

This makes the code easier to read, maintain, test, and reuse.

## Displaying Results

The calculated results are displayed in the browser console with clear labels.

Example:

```text
========== SpendWise Budget Summary ==========
Total Budget: KSh 50000
Total Expenses: KSh 30000
Remaining Balance: KSh 20000
==============================================
```

The results are also displayed on the SpendWise dashboard.

## How to Run the Project

1. Download or clone the project.
2. Open the project folder in Visual Studio Code.
3. Make sure `index.html`, `style.css`, `script.js`, and `README.md` are in the project folder.
4. Open `index.html` in a web browser.
5. Click the **Enter Budget Information** button.
6. Enter your budget and expenses when prompted.
7. Open the browser Developer Tools and select the **Console** tab to view the calculated results.

## Technologies Used

* HTML
* CSS
* JavaScript

## Author

**Bor Tut Both**

Junior Developer | Power Learn Project

Skills: Python, JavaScript, React, HTML, CSS, and SQL
