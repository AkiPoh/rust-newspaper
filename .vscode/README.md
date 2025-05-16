# VS Code Development Setup for Electron Forge

## Configuration Overview

This directory contains VS Code configurations optimized for Electron Forge development:

- **settings.json** - Editor behavior and project-specific settings
- **launch.json** - Debugging configurations for main and renderer processes
- **tasks.json** - Build and validation task definitions
- **extensions.json** - Recommended extensions for development

## Configuration Audit Information

| File            | Purpose                   | Security Considerations                   |
| --------------- | ------------------------- | ----------------------------------------- |
| settings.json   | Editor settings           | No security impact                        |
| launch.json     | Debug configuration       | Debug ports (9222-9555) only open locally |
| tasks.json      | Build task definitions    | No sensitive operations                   |
| extensions.json | Extension recommendations | No security impact                        |

## Development Workflow

### Code Formatting

This project uses manual code formatting to give developers control:

1. Format code with: `Shift+Alt+F`
2. ESLint fixes: Run on explicit saves only (`Ctrl+S`)

### Debugging

Three debugging configurations are available:

1. **Debug Main Process** - For Node.js backend code
2. **Debug Renderer Process** - For browser/UI code
3. **Debug All Processes** (recommended) - For full application debugging

To start debugging:

1. Select configuration from Run & Debug panel (`Ctrl+Shift+D`)
2. Press F5 or click the green play button

### Recommended Extensions

Critical extensions for development:

- ESLint and Prettier for code quality
- TypeScript tools for language support
- Electron debugging extensions

## Troubleshooting

If debugging fails to launch:

1. Check if "electron-forge start" works from terminal
2. Verify port 9222 isn't in use by another process
3. Try selecting "Debug All Processes" configuration
