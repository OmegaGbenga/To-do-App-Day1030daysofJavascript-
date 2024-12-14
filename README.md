# Task Manager App

This is a simple **Task Manager Application** built with HTML, CSS, and JavaScript. The app allows users to add tasks, mark them as completed, and delete them. It also uses `localStorage` to save tasks, ensuring they persist across browser sessions.

---

## Features

- **Add Tasks**: Input a task in the input field and click "Add Task" to add it to the list.
- **Mark as Completed**: Click on a task to toggle its completion status.
- **Delete Tasks**: Click the `×` icon next to a task to delete it.
- **Data Persistence**: Tasks are saved in the browser's `localStorage` and persist even after refreshing or closing the page.

---

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling of the application.
- **JavaScript**: Application logic and interaction handling.
- **LocalStorage**: Browser API for persistent data storage.

---

## Getting Started

### Prerequisites
- A modern web browser with `localStorage` support.

### How to Use
1. Clone this repository:
    ```bash
    git clone https://github.com/your-username/task-manager-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd task-manager-app
    ```
3. Open `index.html` in your browser:
    ```bash
    open index.html
    ```

---

## Code Explanation

### JavaScript Properties and Methods Used
1. **`querySelector`**:
   - Used to select elements from the DOM.
   - Example: 
     ```javascript
     const inputBox = document.querySelector("#input-box");
     ```

2. **`createElement`**:
   - Creates new elements dynamically.
   - Example: 
     ```javascript
     let li = document.createElement("li");
     ```

3. **`appendChild`**:
   - Adds a child node to a parent node.
   - Example:
     ```javascript
     liContainer.appendChild(li);
     ```

4. **`localStorage`**:
   - Saves data in the browser for persistent storage.
   - Example:
     ```javascript
     localStorage.setItem("data", liContainer.innerHTML);
     ```

5. **`addEventListener`**:
   - Listens for and responds to user events like clicks.
   - Example:
     ```javascript
     addBtn.addEventListener("click", addTask);
     ```

6. **String Manipulation**:
   - Example:
     ```javascript
     span.innerHTML = "\u00d7"; // Unicode for '×' symbol.
     ```

---

## Files in the Repository

- **`index.html`**: The main HTML structure.
- **`style.css`**: Styling for the application (not included here, but expected in your project).
- **`script.js`**: JavaScript file containing all the logic.
- **`README.md`**: This documentation file.

---

## Demo

Insert a live demo link here if hosted online (e.g., GitHub Pages, Netlify, etc.).

---



## Author

- **Your Name**: Add your name here.
- **GitHub**: [your-username](https://github.com/your-username)

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
