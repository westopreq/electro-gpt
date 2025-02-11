# Electro-GPT

Electro-GPT is a lightweight, cross-platform Electron-based desktop application for accessing ChatGPT with a native app experience.

## Features
- 🖥️ Cross-platform support (macOS & Windows)
- ⚡ Fast and responsive
- 🔒 Secure session management
- 🎨 Custom app icon support
- 📦 Easy packaging and distribution

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the Repository
```sh
git clone https://github.com/yourusername/electro-gpt.git
cd electro-gpt
```

### Install Dependencies
```sh
npm install
```

## Running the Application
To launch the app in development mode:
```sh
npm start
```

## Building for Production
To create distributable versions:

### macOS (Intel-based)
```sh
npm run dist -- --mac
```

### Windows
```sh
npm run dist -- --win
```

## Project Structure
```
Electro-GPT/
├── src/             # Application source code
├── icons/           # App icons for different platforms
├── dist/            # Build output (ignored by Git)
├── package.json     # Project metadata and dependencies
├── .gitignore       # Files ignored by Git
└── README.md        # Project documentation
```

## Customizing the App Icon
1. Place your icon files inside the `icons/` directory.
2. Ensure the following formats are included:
   - `electro-gpt.icns` (for macOS)
   - `electro-gpt.ico` (for Windows)
3. Update the `build` section of `package.json` if necessary.

## Available Builds
Two build versions are available:
- [MacOS Build (Intel)](https://github.com/westopreq/electro-gpt/releases/tag/electro-gpt)
- [Windows Build](https://github.com/westopreq/electro-gpt/releases/tag/electro-gpt)

## Contributing
Pull requests are welcome! If you'd like to contribute, please fork the repository and submit a PR with your changes.

## License
This project is licensed under the [MIT License](LICENSE).

---
**Author:** Westopreq

Created with ❤️ for convenience.

