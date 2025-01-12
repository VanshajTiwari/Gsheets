// console.log(process.env.NODE_ENV);
// console.log(process.env.REACT_APP_REMOTE_BACKEND_URL)
const NODE_ENV=import.meta.env.VITE_NODE_ENV;  // Logs 'production'
const URL=import.meta.env.VITE_REMOTE_BACKEND_URL;  // Logs the URL
const BASE_URL =
import.meta.env.VITE_NODE_ENV === "development"
    ? "http://localhost:8080"
    : URL;

console.log(BASE_URL);
export const USER_URL = `${BASE_URL}/api/user`;
export const SHEET_URL = `${BASE_URL}/api/sheet`;
export const GRID_URL = `${BASE_URL}/api/grid`;
export const COLUMN_URL = `${BASE_URL}/api/column`;
export const ROW_URL = `${BASE_URL}/api/row`;
export const CELL_URL = `${BASE_URL}/api/cell`;
