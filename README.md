# Rust Newspaper

A spatial, visual-first tool for developing production-grade Rust code.

**PROJECT UNDER WORK / IN VERY EARLY DEVELOPMENT / NOT VERIFIED**

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Project Vision

**SECTION UNDER WORK / NOT VERIFIED**

Rust Newspaper reimagines Rust development through a spatial interface where code becomes a system of interconnected "articles" laid out like a digital newspaper. By replacing traditional file navigation with semantic spatial structure, we make systems programming more intuitive and maintainable—without sacrificing Rust's power.

- **Visual-first workflow** - Code units as "articles" in a flexible spatial layout
- **Real Rust output** - Generates clean, idiomatic Rust code
- **Explicit connections** - UUID-tracked relationships between code components
- **Git-compatible** - Projects stored as versionable, mergeable JSON

## Current Status

This project is in early development (pre-alpha). The current repository contains the foundation for the Electron application that will power the interface.

Target roadmap:

- **Q3 2025**: Alpha release – core article layout, linking, Rust code generation
- **Q4 2025–Q1 2026**: Beta – compiler feedback integration, visual debugging
- **Q2 2026**: v1.0 – advanced Rust feature support, workspace scaling

## Development Setup

**SECTION UNDER WORK / NOT VERIFIED**

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm
- [Rust](https://www.rust-lang.org/tools/install) (stable toolchain)
- [VS Code](https://code.visualstudio.com/) (recommended)

### Getting Started

1. Clone the repository

   ```Shell
   git clone https://github.com/AkiPoh/rust-newspaper.git
   cd rust-newspaper
   ```

2. Install dependencies

   ```Shell
   npm install
   ```

3. Start the development server
   ```Shell
   npm start
   ```

### Environment Structure

This project consists of two main components:

1. **Electron Application** - The visual interface built with Electron, including backend

### VS Code Configuration

This project includes optimized VS Code settings for Electron/Rust development:

- Specialized debugging for Electron processes
- ESLint and formatting configurations
- Recommended extensions

For detailed VS Code setup instructions, see [.vscode/README.md](.vscode/README.md).

### Project Structure

- **src/** - Electron application source
  - **index.ts** - Main process entry point
  - **renderer.ts** - Renderer process entry point
  - **preload.ts** - Preload script for secure IPC
- **rust/** - Rust code generation components _(coming soon)_
- **.webpack/** - Build output (generated)
- **out/** - Packaged applications (generated)

### Available Scripts

- `npm start` - Start development server
- `npm run package` - Package application without installers
- `npm run make` - Build distributables for your platform
- `npm run publish` - Package and publish the application
- `npm run lint` - Run ESLint on TypeScript files
