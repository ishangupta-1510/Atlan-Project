# CSV Query App

## Overview

This web-based application allows users to run SQL-like queries and view the corresponding results. The application features a space for accepting SQL queries, predefined queries, and tables displaying mock data.

## Technologies Used

- React
- PapaParse (for CSV parsing)
- React Bootstrap
- AceEditor
- Other relevant dependencies

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

Deployment
The application is deployed on Netlify at .

Additional Notes
Libraries Used :
