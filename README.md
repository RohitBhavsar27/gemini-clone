# Gemini Clone

This project is a clone of the Google Gemini chatbot, built with the MERN stack. It allows users to interact with a large language model in a conversational way.

## About

This project was created to demonstrate the capabilities of the MERN stack and the Google Generative AI API. It is a work in progress, and new features will be added over time.

## Live Demo

You can access the live version of this project here: [https://gemini-clone-ga8y.onrender.com/](https://gemini-clone-ga8y.onrender.com/)

## Features

*   **Chat Interface:** A user-friendly interface for interacting with the chatbot.
*   **Prompt History:** A sidebar that displays a list of recent prompts.
*   **New Chat:** The ability to start a new chat session.
*   **Collapsible Sidebar:** The sidebar can be expanded or collapsed to save space.
*   **Pre-defined Prompts:** A few example prompts to help users get started.
*   **Loading Animation:** A loading animation is displayed while the chatbot is generating a response.
*   **Formatted Output:** The chatbot's response is displayed with HTML formatting.

## Implementation

### Frontend

*   **Framework:** React
*   **Styling:** CSS
*   **State Management:** React Context API

### Backend

*   **Framework:** Express.js
*   **API:** Google Generative AI API
*   **Middleware:** Cors, Dotenv

## Execution

To run this project, you will need to have Node.js and npm installed on your machine.

### Frontend

1.  Navigate to the `client` directory.
2.  Install the dependencies with `npm install`.
3.  Start the development server with `npm start`.

### Backend

1.  Navigate to the `server` directory.
2.  Install the dependencies with `npm install`.
3.  Start the server with `npm start`.

## Getting Started

To get started with this project, you will need to create a `.env` file in the `server` directory with the following content:

```
API_KEY=YOUR_API_KEY
```

You can get an API key from the [Google Generative AI](https://aistudio.google.com/app/apikey) website.

## Acknowledgements

*   [Create React App](https://github.com/facebook/create-react-app)
*   [Google Generative AI](https://ai.google.dev/)

## License

This project is licensed under the ISC License.