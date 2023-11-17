# CSV Query App

## Overview

This web-based application allows users to run SQL-like queries and view the corresponding results. The application features a space for accepting SQL queries, predefined queries, and tables displaying mock data.

Deployment
The application is deployed on Netlify at https://magnificent-pegasus-4bd378.netlify.app/

## Technologies Used

- React
- React Hooks
- PapaParse (for CSV parsing)
- React Bootstrap
- AceEditor
- Other relevant dependencies
- React Table

## Features

1. **SQL Query Input:**
   - Users can input SQL queries using the integrated code editor (AceEditor).

2. **Predefined Queries:**
   - The application provides predefined queries for quick access, allowing users to toggle between different queries.

3. **Table Display:**
   - Displays tabular data corresponding to the executed queries.

4. **Query Execution:**
   - Users can run queries, with clear feedback on success or failure.

5. **Table Reset:**
   - Ability to reset the displayed table to the initial dataset.

## Folder Structure

/src
|-- components
|   |-- Moda.js
|   |-- Navbar.js
|   |-- CsvTable.js
|   |-- QueryForm.js
|   |-- QuerySelector.js
|   |-- QueryInput.js
|   |-- TableSelector.js
|-- App.js

Installation
1. Clone the repository: git clone https://github.com/ishangupta-1510/Atlan-Project
2. cd Atlan-Project
3. npm install

Usage
1. Start the development server:npm start
2. Open your browser and visit http://localhost:3000 to view the application.

Performance
Page Load Time: The page load time has been optimized for a smooth user experience.
Optimizations:
   1. **React Table for Efficient Rendering:**
        - To handle large datasets without compromising performance, the application utilizes [React Table]- a lightweight and fast table library for React.
          
  2. **Lazy Loading and Code Splitting:**
     - Code splitting techniques have been employed to ensure that only essential code is loaded initially, reducing the initial payload. This includes lazy loading components and features to be loaded on-demand, improving the overall load time.

  3. **Minification and Compression:**
     - All static assets, including JavaScript and CSS files, are minified and compressed to reduce file sizes. This contributes significantly to faster loading times, especially for users with slower internet connections.

  4. **Removed all the unwanted/unused functions and components**
     - Removed all the unwanted/unused functions and components to reduce the wait time and improve the application performance.
