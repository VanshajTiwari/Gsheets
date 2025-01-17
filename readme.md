# GSheets

## Objective
Develop a web application that mimics the user interface and core functionalities of Google Sheets, focusing on mathematical and data quality functions, data entry, and key UI interactions.


## Features

### 1. Spreadsheet Interface
- **Google Sheets-Like UI**: A layout that closely resembles Google Sheets, including the toolbar, formula bar, and cell structure.
- **Drag Functions**: Implemented drag functionality for cell content, formulas, and selections.
- **Cell Dependencies**: Accurate handling of cell dependencies with dynamic updates upon changes.
- **Basic Formatting**: Support for bold, italics, font size, and color customization.
- **Row/Column Manipulation**: Add, delete, and resize rows and columns seamlessly.

### 2. Mathematical Functions
Implemented basic mathematical functions:
1. **SUM**: Calculates the sum of a range of cells.
2. **AVERAGE**: Calculates the average of a range of cells.
3. **MAX**: Returns the maximum value from a range of cells.
4. **MIN**: Returns the minimum value from a range of cells.
5. **COUNT**: Counts numerical values in a range of cells.

### 3. Data Quality Functions
Implemented data quality functions:
1. **TRIM**: Removes leading and trailing whitespace from a cell.
2. **UPPER**: Converts cell text to uppercase.
3. **LOWER**: Converts cell text to lowercase.
4. **REMOVE_DUPLICATES**: Removes duplicate rows from a selected range.


### 4. Data Entry and Validation
- **Data Types**: Supports numbers, text, and dates.
- **Validation**: Basic checks to ensure data integrity, such as verifying numeric values in number-only cells.

### 5. Testing
- **User Testing**: Allows users to test implemented functions with their own data.
- **Result Display**: Clear display of function execution results.

### Bonus Features
- Additional mathematical and data quality functions.
- Support for complex formulas, including relative and absolute references.
- Save and load spreadsheet functionality.
- Data visualization capabilities like charts and graphs.

---

## Tech Stack

### 1. **Frontend**
- **Angular**: For building a responsive and dynamic user interface.
- **TypeScript**: For type safety and maintainability.

### 2. **Backend**
- **Node.js**: For handling server-side logic.
- **Express.js**: For creating RESTful APIs.

### 3. **Database**
- **MongoDB**: For efficient data storage and retrieval of user data and spreadsheet content.

---

## Data Structures and Usage

### **Frontend**
1. **State Management**: 
   - Used React's `useState` hook for efficient state management.
   - Complex states like cell dependencies handled with context APIs.

2. **Data Representation**:
   - Spreadsheet represented as a 2D array of objects where each object corresponds to a cell with properties like value, formula, and formatting.

### **Backend**
1. **Cell and Formula Management**:
   - Utilized dependency graphs to manage cell relationships and trigger updates.

2. **Database Schema**:
   - **Spreadsheet Schema**: Stored as collections with rows and cells as nested objects/documents.
   - **User Schema**: Included authentication and authorization details.

### **Database**
- **MongoDB** was chosen for its flexibility in handling hierarchical data structures and scalability to support large datasets.

---

## Why This Tech Stack?
1. **React.js**: Provides an intuitive and modular approach to building interactive UIs, ideal for a spreadsheet application.
2. **TypeScript**: Ensures type safety, reducing runtime errors and improving code maintainability.
3. **Node.js + Express.js**: Allows for fast and scalable server-side development, ideal for handling API requests and spreadsheet computations.
4. **MongoDB**: Offers dynamic schema design, making it perfect for storing user data and spreadsheet content efficiently.

---

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- npm

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/username/google-sheets-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Gsheets
   ```

3. Install dependencies in both server and client Dir:
   Go to the root of server directory and client directory then run below cmd.
   ```bash
   npm install
   ```
5. Create the `.env` Files
You need to create two `.env` files—one for the **server** and one for the **client**.

Server `.env`:

In the root of the server directory, create a `.env` file with the following content:

```env
PORT=8080
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=2h
PASSWORD=your_password
MONGO_URI_DEV=your_dev_mongo_uri
MONGO_URI=your_prod_mongo_uri
NODE_ENV=development
```
Cliet `.env`:

In the root of the client directory, create a `.env` file with the following content:

```env
NODE_ENV=development
```

5. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```


6. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

---


## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For queries or contributions, contact:
- **Name**: Vanshaj Tiwari
- **Email**: [vanshajtiwari62@gmail.com](mailto:vanshajtiwari62@gmail.com)
- **GitHub**: [GitHub Profile](https://github.com/VanshajTiwari)
