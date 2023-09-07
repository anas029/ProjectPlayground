# Expense Tracker

Expense Tracker is a web application that allows you to efficiently manage your income and expenses. It's built using Vite, React, and TypeScript, making it a modern and user-friendly financial tracking tool.

## Table of Contents

-   [Features](#features)
-   [Getting Started](#getting-started)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)

## Features

-   **Expense Tracking:** Log your income and expenses with ease.
-   **Categorization:** Categorize transactions as income or expenses to better understand your financial trends.
-   **Real-Time Updates:** Utilizes Firebase Firestore for real-time transaction updates.
-   **User Authentication:** Secure user authentication with Firebase Authentication.
-   **Financial Overview:** Get an overview of your balance, total income, and total expenses.
-   **Transaction Management:** Easily add, edit, and delete transactions.

## Getting Started

To get started with Expense Tracker, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/anas029/expense-tracker.git
```

2. Navigate to the project directory:

    ```bash
    cd expense_tracker
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a Firebase project:

    - Set up a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    - Configure Firebase Authentication and Firestore.
    - Update the Firebase configuration in your project.

5. Start the development server:

    ```bash
    npm run dev
    ```

6. Open the application in your web browser:
    - [http://localhost:5173](http://localhost:5173)

## Usage

1. Sign up for an account or log in with your existing credentials.
2. Add income and expense transactions using the provided form.
3. View your financial overview, including your balance, total income, and total expenses.
4. Edit or delete transactions as needed.

## Contributing

Contributions to Expense Tracker are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix:

    ```bash
    git checkout -b feature-name
    ```

3. Make your changes, commit them with clear messages, and push to your branch.
4. Create a pull request with a detailed description of your changes.

Your contributions will help make Expense Tracker even better!

## License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute the code as needed. If you use any part of this project, attribution is appreciated but not required.
