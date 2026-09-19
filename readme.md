# Personal Budget & Expense Tracker

## Week 2 Project

The Personal Budget & Expense Tracker is a simple web project designed to help users record and view their daily expenses.

This project was continued from Week 1 and upgraded with an expense table, improved form, multimedia content, interactive elements, and advanced CSS selectors.

## Technologies Used

- HTML5
- CSS3

## Project Files

### index.html

The `index.html` file contains the structure of the Budget Tracker.

It includes:

- Main heading and logo
- Add Expense form
- Expense category dropdown
- Expense table
- Sample expense records
- Budgeting video
- How-to-use collapsible section
- Footer

### style.css

The `style.css` file controls the appearance of the website.

It includes:

- Page layout
- Colors
- Spacing
- Form styling
- Table styling
- Alternating table rows
- Hover effects
- Button styling
- Input focus effects
- Advanced CSS selectors
- Responsive multimedia styling

## Features Added in Week 2

### 1. Expense Table

The project now contains a properly structured HTML table using:

- `<table>`
- `<thead>`
- `<tbody>`
- `<tr>`
- `<th>`
- `<td>`

The table contains five sample expenses.

### 2. Add Expense Form

The form now contains:

- Expense name
- Expense amount
- Expense category
- Expense date
- Add Expense button

The category field is a dropdown containing:

- Food
- Transport
- Rent
- Entertainment
- Other

### 3. Multimedia

A logo image was added using the `<img>` element.

A budgeting video was also embedded using an `<iframe>`.

### 4. Interactive Elements

A `<details>` and `<summary>` section was added to explain how the tracker works.

Table rows also change appearance when the mouse moves over them.

The Add Expense button uses `cursor: pointer`.

### 5. Advanced CSS Selectors

The project uses several advanced CSS selectors:

- `.expenses-section td` - descendant selector
- `input:not([type="submit"])` - negation pseudo-class
- `input:focus` - focus pseudo-class
- `.expenses-section tr:nth-child(even)` - position-based pseudo-class
- `.expenses-section tbody tr:hover` - hover pseudo-class

## Future Development

In future weeks, JavaScript will be added to make the Add Expense button functional.

Future features may include:

- Adding expenses dynamically
- Calculating total expenses
- Deleting expenses
- Editing expenses
- Budget calculations
- Data storage
- Interactive dashboard

## Author

Bor Tut Both

Personal Budget & Expense Tracker - Week 2