# Shopping List Application

![Shopping List App](https://github.com/TusharMohapatra07/Shopping-list/assets/137442734/fdb69ef8-62b3-4363-8dd3-407c9c52d317)

## Overview

This is a simple shopping list application built using HTML, CSS, and JavaScript. It provides a user-friendly interface for managing shopping items efficiently. The application heavily relies on DOM manipulation to provide seamless interaction and dynamic updates.

## Features

1. **Add New Item:** Users can add a new item to the list via a form. Duplicate items won't be added to ensure the list remains organized.
2. **Remove Item:** Items can be removed easily by clicking on the 'X' button associated with each item.
3. **Clear All Items:** Users can clear the entire list with a single click using the 'Clear All' button.
4. **Filter Items:** A filter input field allows users to search and filter items based on their names.
5. **Edit Existing Items:** Clicking on an existing item puts it into 'edit mode', enabling users to update the item's details. The changes can be saved by clicking the 'Update item' button.
6. **Local Storage Integration:** All additions and removals of items are synced with the local storage, ensuring that the data persists even after page refreshes or sessions are closed.

## Setup Instructions :

1.  **Clone the Repository (if applicable):**

    If this project is hosted on a version control system like Git:

    ```bash
    git clone https://github.com/TusharMohapatra07/Shopping-list.git
    cd Shopping-list
    ```

2.  **Install Dependencies:**

    This project uses Node.js and npm. Install the project dependencies:

    ```bash
    npm install
    ```

    This command installs all packages listed in `package.json` into the `node_modules` directory.

3.  **Start the Development Server:**

    This project is configured with a development server that automatically reloads the browser when you make changes. To start it, use the following command:

    ```bash
    npm start
    ```

    **Important:** Once you run `npm start`, the server will usually run in your terminal. You'll need to keep this terminal window open while you're developing. The server will provide you with a local URL (usually `http://localhost:<port>` or `http://127.0.0.1:<port>`) that you can open in your web browser to view the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
