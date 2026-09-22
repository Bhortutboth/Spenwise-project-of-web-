# SpendWise Dashboard Shell

## Project Overview

SpendWise is a personal budget and expense tracking dashboard designed to help users view their financial information in a simple and organized way.

For Week 4, the existing SpendWise project was developed into a responsive dashboard shell using CSS Grid and Flexbox.

## Files

### index.html

The `index.html` file contains the structure of the dashboard, including:

* Sidebar navigation
* Dashboard header
* User profile section
* Financial summary cards
* Six expense category cards
* Food
* Transport
* Rent
* Entertainment
* Savings
* Utilities

The financial information is static because functionality is not required for this week's assignment.

### style.css

The `style.css` file provides the visual design and responsive layout.

It includes:

* CSS Grid for the overall dashboard layout
* CSS Grid for the summary and category cards
* Flexbox for the sidebar navigation
* Flexbox for the header
* Flexbox inside each category card
* CSS custom properties for the theme
* Responsive design for screens below 768px
* Hover and keyboard focus animations
* Dark theme using `prefers-color-scheme: dark`
* Typography using Google Fonts

## CSS Custom Properties

The theme uses CSS variables inside the `:root` selector.

Important variables include:

* `--brand-color`
* `--accent-color`
* `--surface-color`
* `--background-color`
* `--primary-text`
* `--secondary-text`

Using CSS custom properties makes it easier to maintain and change the application's color theme.

## Responsive Design

The dashboard uses a media query at `768px`.

On smaller screens:

* The sidebar and main content become a single-column layout.
* Navigation items wrap onto multiple lines.
* Summary cards become one column.
* Expense cards become one column.
* Header content stacks vertically.

The responsive layout can be tested using the browser's DevTools Device Toolbar.

## Micro-interactions

The expense cards include hover and keyboard focus interactions.

When a user hovers over or focuses on a card:

* The card moves slightly upward.
* A shadow appears around the card.
* A visible focus outline appears for keyboard users.

The transition lasts `200ms`, which is within the required maximum of 250ms.

## Dark Theme

The project includes a dark theme using:

`@media (prefers-color-scheme: dark)`

The dark theme changes the CSS custom properties in `:root` rather than creating a completely separate stylesheet.

## Technologies Used

* HTML5
* CSS3
* CSS Grid
* Flexbox
* CSS Custom Properties
* CSS Media Queries
* Google Fonts

## How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Use browser DevTools to test the responsive layout.

## Author

Bor Tut Both
