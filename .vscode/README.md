# VS Code Workspace Configuration for Electron Forge Project

## Configuration Overview

This directory contains VS Code configurations optimized for Electron Forge project development:

| File                  | Purpose                                                  |
| --------------------- | -------------------------------------------------------- |
| **`settings.json`**   | Editor behavior and project-specific settings            |
| **`launch.json`**     | Debugging configurations for main and renderer processes |
| **`tasks.json`**      | Build and validation task definitions                    |
| **`extensions.json`** | Recommended extensions for development                   |

## Security Considerations

| File                  | Developer Security Impact | End-User Security Impact |
| --------------------- | ------------------------- | ------------------------ |
| **`settings.json`**   | Potentially Significant   | Potentially Significant  |
| **`launch.json`**     | Potentially Significant   | Minimal                  |
| **`tasks.json`**      | Potentially Significant   | Potentially Significant  |
| **`extensions.json`** | Major                     | Potentially Significant  |

Each configuration file beginning includes security considerations documentation addressing both developer and end-user impacts. Refer to those for more comprehensive information of such.

## Development Philosophy

This project balances project developer VS Code configuration consistency with individual developer flexibility:

- **Harmonized Essentials**: Core tooling and formatting rules help ensure code style consistency and quality
- **Developer Autonomy**: Preferences like auto-save vs. manual save are left to individual choice
- **Opt-in Extensions**: Recommended extensions enhance the experience but remain optional
- **Manual Formatting**: Code formatting is triggered manually (Prettier), or on manual save (ESLInt), giving developers control over when changes occur

Our goal is to provide a flexible development environment that feels reasonably natural to each develeoper while maintaining consistency where it most matters and ensuring our project is easy to get started up with even by more inexperienced developers.

## Configuration Details

This section bridges the gap between "here are some files" and "here's how to effectively develop with them," allowing newcomers to begin understanding the reasoning behind decisions while quickly giving experienced devs the technical details they need to work productively.

### Editor Settings (`settings.json`)

The settings file is organized into logical sections:

- **Formatting and Linting Controls**: ESLint fixes run only on explicit saves ("explicit" setting), not auto-save; Prettier is set as the default manual formatter
- **Language-Specific Settings**: Explicitly defines Prettier formatter to be used for JavaScript, TypeScript, and JSON files through language-specific overrides
- **Import Handling**: Controls JavaScript/TypeScript `import` statements—prompts before updating paths when files move and prefers relative paths (`../components/Button`)
- - **TypeScript Configuration**: Uses project's TypeScript version from node_modules instead of VS Code's built-in one, and enables type checking in JavaScript files without requiring explicit `@ts-check` comments
- **Search Optimization**: Excludes large directories (node_modules, dist, out, .webpack) from search results and file watching—valuable for reducing CPU/memory when developing Electron projects with VS Code
- **Cross-Platform Compatibility**: Standardizes on LF line endings ("\n") across all platforms and ensures all files end with a newline character to prevent Git diff issues
- **Code Style**: Provides visual guide rulers at column 100 for line length and automatically removes trailing whitespace
- **Electron-Specific Settings**: Configures ESLint to validate JavaScript, TypeScript, JSX, and TSX files

### Debugging Configuration (`launch.json`)

The debugging setup orchestrates a coordinated flow for Electron's dual processes:

- **Activation & Configuration**: When launched (F5), first prompts for `debugPort` (9222-9555) and `nodeEnv` values—creating the debug session configuration dynamically without requiring file edits
- **Build & Preparation**: Automatically runs the `"preLaunchTask": "npm: build-dev"` before launching the debugger, ensuring fresh compilation of TypeScript code
- **Main Process Launch**: Starts Electron with Node.js debugging attached, passing the selected port via `"args": [".", "--remote-debugging-port=${input:debugPort}"]` to bridge the processes
- **Renderer Process Connection**: Automatically connects Chrome DevTools to the port opened by the main process—the connection is implicit but the debugging is fully synchronized
- **Source Resolution**: Maps compiled code back to source via `"resolveSourceMapLocations"` and `"sourceMapPathOverrides"` configurations that understand webpack's bundling approach
- **Synchronized Control Flow**: When using "Debug All Processes," stopping debugging in one process (`"stopAll": true`) stops the entire application—essential for clean debugging sessions

### Build Tasks (`tasks.json`)

The tasks.json file defines two tasks that support the development workflow:

- **`npm: build-dev`**: Created specifically to be triggered by launch.json's `"preLaunchTask": "npm: build-dev"` reference—runs the application in development mode and continues monitoring TypeScript compilation in the background so debugging can attach cleanly
- **`npm: lint`**: Provides code quality checking but isn't automatically part of the debug flow—remains available for manual execution when developers want to validate their code

### Recommended Extensions (`extensions.json`)

The extensions.json file provides the recommended extension IDs for VS Code, so that the developer can choose install or enable the recommended extensions within VS Code.

- **Categorically Organised**: Recommendations structured six categories (Core Development, TypeScript/JavaScript, Source Control, Documentation, Web Technologies, Quality of Life)—each addressing specific needs of Electron development
- **Purpose of Each Extension is Documented**: Uses comments to explain each extension's purpose, allowing for developers to make educated decisions if to install such extensions
- **Opt-in Flexibility**: VS Code by default requires the user to install the recommended extension; VS Code by default should not install the extensions automatically

This file represents one of the more security wise questionable component of the VS Code configuration, as it introduces third-party extensions with VS Code privileges into the VS Code development environment. Though noting that these are opt-in extensions, so no hidden actions that could compromise the device should take place by recommendations made by `extensions.json`, requiring the developer to choose to download and enable such extensions.

## Recommended Extensions

Our `extensions.json` includes carefully selected tools organized by purpose:

### Core Development

- **ESLint**: Code quality enforcement with integrated fixing on manual save, (configured by `settings.json`)
- **Prettier**: Consistent code formatting when manually triggered, (configured by `settings.json`)

### TypeScript/JavaScript Productivity

- Error Lens, TypeScript Importer, Pretty TypeScript Errors, Path Intellisense, NPM Intellisense

### Source Control & Collaboration

- **GitLens**: Enhanced Git capabilities for understanding code history

### Documentation & Markdown Support

- Markdown All in One, Markdown Mermaid, Markdown PDF, PDF Viewer

### Web Technologies

- **Web Validator**: HTML/CSS validation for Electron's web-based UI

### Quality of Life

- **Material Icon Theme**: More distinct visual file type identification icons for VS Code, to achieve easier navigation

## Development Workflow

### Code Formatting

This project uses manual code formatting to give developers control:

1. Format code with Prettier: `Shift+Alt+F`
2. ESLint fixes: Run on explicit saves only (`Ctrl+S`)

### Debugging

Three debugging configurations are available:

1. **Debug Main Process**: For Node.js backend code
2. **Debug Renderer Process**: For browser/UI code
3. **Debug All Processes**: For full application debugging (recommended)

To start debugging:

1. Select configuration from Run & Debug panel (`Ctrl+Shift+D`)
2. Press F5 or click the green play button
3. Optionally select a custom debug port or Node environment when prompted

## Troubleshooting

If debugging fails to launch:

1. Check if "electron-forge start" works from terminal
2. Verify port 9222 isn't in use by another process
3. Try selecting "Debug All Processes" configuration
4. Check the Output panel (Ctrl+Shift+U) for error messages
