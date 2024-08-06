# To-Do List App

A modern and responsive To-Do List application built with React and Redux, styled using Tailwind CSS. This application features persistent state management with local storage, allowing users to maintain their tasks across sessions.

## Features

- **Add and Remove Tasks:** Manage your to-do list by adding new tasks and removing completed ones.
- **Persistent State:** Tasks are saved to local storage, so your to-do list persists across page reloads.
- **Responsive Design:** Fully responsive UI that works seamlessly on mobile, tablet, and desktop devices.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A predictable state container for JavaScript apps.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Local Storage:** For persisting Redux state across browser sessions.

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/omarrrefaatt/To_Do_list.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd To_Do_list
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Development Server:**

   ```bash
   npm start
   ```

   Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Usage

1. **Adding a Task:**
   - Enter the task description in the input field.
   - Click the "Add" button or press Enter to add the task to the list.

2. **Removing a Task:**
   - Click the "Remove" button next to the task you wish to delete.

## Project Structure

The project is organized as follows:

```
src/
├── redux/
│   ├── taskSlice.js        # Redux slice for task management
│   ├── localStorage.js     # Utility functions for local storage
│   └── store.js            # Redux store configuration
├── App.jsx                 # Main application component
├── index.js                # Application entry point
├── index.css               # Global styles and Tailwind CSS imports
└── ...                     # Other source files
```

## Configuration

**Local Storage Integration:**

State is saved to and loaded from local storage to persist user tasks across browser sessions.

**Redux Configuration:**

The Redux store is configured to load initial state from local storage and save state changes back to local storage.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.



## Contact

For any questions or inquiries, please contact [Omar Refaat](mailto:omarref3at2031@gmail.com).

