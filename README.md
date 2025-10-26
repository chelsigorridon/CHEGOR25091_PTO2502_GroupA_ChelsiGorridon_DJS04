# 🎧 DJS03: React Podcast Landing Page

## 📘 What is the Podcast App?

The Podcast App is an interactive web application built with React that allows users to browse, search, sort, and explore podcasts across various genres.
It demonstrates the use of reusable components, API integration, and dynamic UI updates using React hooks.

## 🔗 Link to Local Host

http://localhost:5173/

## 🌟 Key Features

✅ Podcast Display

Displays a responsive grid of podcast cards.

Each card shows podcast details such as title, genre(s), number of seasons, and last updated date.

On hover, cards highlight with a purple box-shadow for better visibility.

✅ Dynamic Search

Users can search podcasts by typing any part of the show title.

Search results update dynamically as the user types or submits input.

Search works seamlessly with pagination and sorting — no data is lost or reset.

✅ Sorting Options

Sort podcasts by:

Newest First (Date - Descending)

Title (A–Z)

Title (Z–A)

Sorting updates the display immediately while maintaining the search and pagination state.

✅ Pagination

Podcasts are displayed with pagination controls (“Previous” and “Next”).

Keeps track of the current page and total number of pages dynamically.

✅ API Integration

All data is fetched from: https://podcast-api.netlify.app/

A loading spinner is displayed while fetching data.

An error message appears if data fails to load.

✅ Responsive Design

Fully responsive layout for desktop, tablet, and mobile screens.

✅ Reusable Components

Built with modular React components for Search, Sort, Pagination, and Podcast Cards.

## 🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6+)

React (v18+)

Vite

Visual Studio Code (VS Code)

Git Version Control

## 💻 Working Usage and Instructions

🧩 How It Works

Run the app using Vite → open: http://localhost:5173/

The app will display a loading animation while fetching podcasts.

Once loaded, you’ll see podcast cards arranged in a grid layout.

Hover over a card to see a purple shadow effect.

Use the search bar to find podcasts by title.

Use the dropdown menu to sort podcasts.

Navigate between pages using the pagination buttons.

## ⚙️ Setup Steps
Prerequisites

Make sure you have:

A modern web browser (Chrome, Firefox, Edge, etc.)

VS Code (or another code editor)

Git installed (if cloning the project)

Node.js and npm installed

Installation

Clone the repository:

git clone <your-repo-url>


Navigate to the project folder:

cd podcast-app


Install dependencies:

npm install


Start the development server:

npm run dev


Open your browser at:
http://localhost:5173/

# 🧠 Developer Notes

Built using React functional components and hooks (useState, useEffect).

Features dynamic rendering with props and state management.

Code is well-documented using JSDoc-style comments for clarity and maintainability.

# 📄 About

A front-end project showcasing modern React practices such as:

Component composition

State management

Real API data fetching

UI responsiveness and interactivity