# Doc Autobot: Your AI-Powered Documentation Assistant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Tired of writing documentation? Let AI do the heavy lifting!**

Doc Autobot is a powerful CLI tool that automatically generates `README.md` and `CONTRIBUTING.md` files for your projects. By leveraging the power of Gemini AI, Doc Autobot creates comprehensive and professional documentation in seconds, allowing you to focus on what you do best: coding.

## Key Features

*   **AI-Powered `README.md` Generation:** Automatically creates a detailed `README.md` by analyzing your project's content.
*   **Templated `CONTRIBUTING.md` Generation:** Quickly generates a standard `CONTRIBUTING.md` file.
*   **Interactive Wizard**: If you run the tool without commands, a user-friendly wizard guides you through the options.
*   **Multiple Commands**: Offers dedicated commands for generating specific files.
*   **Project Context Awareness**: Fetches details from `package.json` to inform documentation generation.
*   **Tech Stack Agnostic**: Useful for any type of project.

## How It Works

Doc Autobot works by scanning your project's files and using the Gemini AI to understand the purpose and functionality of your code. It then uses this understanding to generate a `README.md` file that accurately describes your project. The `CONTRIBUTING.md` file is generated from a standardized template that can be easily customized.


## Environment Variables

To use the AI-powered features of Doc Autobot, you need to set up your Gemini API key.

1.  Create a `.env` file in the root of your project.
2.  Add the following line to the `.env` file:

```
GEMINI_API_KEY=your_api_key
```

Replace `your_api_key` with your actual Gemini API key.

## Get Started

Ready to automate your documentation process? Install Doc Autobot today and see the magic happen!

```bash
npm install -g doc-autobot
```

Once installed, navigate to your project's root directory and run the following command:

```bash
doc-autobot
```

This will launch the interactive wizard, which will guide you through the process of generating your documentation.

## Contributing

We welcome contributions from the community! If you have an idea for a new feature or have found a bug, please open an issue on our [GitHub repository](https://github.com/hemantpatel011/doc-autobot).

## License

Doc Autobot is licensed under the MIT License. See the [LICENSE](https://github.com/hemantpatel011/doc-autobot/blob/main/LICENSE) file for more information.
