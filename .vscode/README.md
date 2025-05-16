# VS Code Workspace Configuration for Electron Forge Project

## Configuration Overview

This directory contains VS Code configurations optimized for Electron Forge project development:

| File                | Purpose                                                  |
| ------------------- | -------------------------------------------------------- |
| **settings.json**   | Editor behavior and project-specific settings            |
| **launch.json**     | Debugging configurations for main and renderer processes |
| **tasks.json**      | Build and validation task definitions                    |
| **extensions.json** | Recommended extensions for development                   |

## Security Considerations

| File                | Developer Security Impact | End-User Security Impact |
| ------------------- | ------------------------- | ------------------------ |
| **settings.json**   | Potentially Significant   | Potentially Significant  |
| **launch.json**     | Potentially Significant   | Minimal                  |
| **tasks.json**      | Potentially Significant   | Potentially Significant  |
| **extensions.json** | Major                     | Potentially Significant  |

Each configuration file beginning includes security considerations documentation addressing both developer and end-user impacts. Refer to those for more comprehensive information of such.

## Development Philosophy

This project balances project developer VS Code configuration consistency with individual developer flexibility:

- **Harmonized Essentials**: Core tooling and formatting rules help ensure code style consistency and quality
- **Developer Autonomy**: Preferences like auto-save vs. manual save are left to individual choice
- **Opt-in Extensions**: Recommended extensions enhance the experience but remain optional
- **Manual Formatting**: Code formatting is triggered manually (Prettier), or on manual save (ESLInt), giving developers control over when changes occur

Our goal is to provide a flexible development environment that feels reasonably natural to each develeoper while maintaining consistency where it most matters and ensuring our project is easy to get started up with even by more inexperienced developers.

## Configuration Details

### Editor Settings (settings.json)

The settings file is organized into logical sections:

- **Formatting and Linting Controls**: ESLint runs only on manual save, not auto-save
- **Language-Specific Settings**: Explicitly defines Prettier formatter to be used for JavaScript, TypeScript, and JSON
- **Import Handling**: Settings for import path handling and updates when files move
- **TypeScript Configuration**: Uses project's TypeScript version instead of VS Code's built-in one
- **Search Optimization**: Excludes build directories and node_modules from search and file watching
- **Cross-Platform Compatibility**: Uses LF line endings and enforces final newlines
- **Code Style**: Visual guides and whitespace handling
- **Electron-Specific Settings**: File types for ESLint validation

### Debugging Configuration (launch.json)

The debugging setup provides flexible options:

- **User-Configurable Settings**: Customizable debug ports (9222-9555) and Node environments
- **Main Process Debugging**: Node.js configuration for the Electron main process
- **Renderer Process Debugging**: Chrome DevTools configuration for the UI
- **Combined Configuration**: "Debug All Processes" option for full application debugging

### Build Tasks (tasks.json)

Available automated tasks:

- **npm: build-dev**: Primary build task used by the debugger to prepare the application
- **npm: lint**: Runs ESLint on TypeScript files for code quality checks

## Recommended Extensions

Our extensions.json includes carefully selected tools organized by purpose:

### Core Development

- **ESLint**: Code quality enforcement with integrated fixing on manual save
- **Prettier**: Consistent code formatting when manually triggered

### TypeScript/JavaScript Productivity

- Error Lens, TypeScript Importer, Pretty TypeScript Errors, Path Intellisense, NPM Intellisense

### Source Control & Collaboration

- **GitLens**: Enhanced Git capabilities for understanding code history

### Documentation & Markdown Support

- Markdown All in One, Markdown Mermaid, Markdown PDF, PDF Viewer

### Web Technologies

- **Web Validator**: HTML/CSS validation for Electron's web-based UI

### Quality of Life

- **Material Icon Theme**: Visual file type identification for easier navigation

## Development Workflow

### Code Formatting

This project uses manual code formatting to give developers control:

1. Format code with: `Shift+Alt+F`
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
