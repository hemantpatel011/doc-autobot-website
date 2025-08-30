# Doc-Autobot Website

This is the landing page for Doc-Autobot, a tool that helps you automate documentation.

## Features

*   **Hero Section:** A welcoming section that introduces Doc-Autobot.
*   **Features Section:** Highlights the key features of Doc-Autobot.
*   **Demo Section:** Provides a demonstration of how Doc-Autobot works.
*   **Secondary CTA Section:** Encourages users to take a secondary action.
*   **Footer:** Contains links to important pages and social media.
*   **Dark Mode:** The website can be viewed in both light and dark mode.

## Technologies Used

*   [React](https://reactjs.org/)
*   [Vite](https://vitejs.dev/)
*   [Material-UI](https://mui.com/)
*   [Tailwind CSS](https://tailwindcss.com/)
*   [Font Awesome](https://fontawesome.com/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v14 or higher)
*   [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/your-username/doc-autobot-website.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd doc-autobot-website
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

### Running the Development Server

To start the development server, run the following command:

```sh
npm run dev
```

This will start the development server at `http://localhost:5173`.

### Building for Production

To build the project for production, run the following command:

```sh
npm run build
```

This will create a `dist` directory with the production-ready files.

## Project Structure

```
.
├── public
│   └── ...
├── src
│   ├── components
│   │   ├── Demo.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   └── SecondaryCTA.jsx
│   ├── contexts
│   │   └── ThemeContext.jsx
│   ├── theme
│   │   └── index.js
│   ├── App.docautobot.jsx
│   └── ...
├── .gitignore
├── index.html
├── package.json
└── ...
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.