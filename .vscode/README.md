# VS Code Development Setup for Electron Forge

## Configuration Overview

This directory contains VS Code configurations optimized for Electron Forge development:

| File                | Purpose                                                  |
| ------------------- | -------------------------------------------------------- |
| **settings.json**   | Editor behavior and project-specific settings            |
| **launch.json**     | Debugging configurations for main and renderer processes |
| **tasks.json**      | Build and validation task definitions                    |
| **extensions.json** | Recommended extensions for development                   |

## Security Considerations

- **settings.json**: No security impact - Contains only editor preferences and workflow settings
- **launch.json**: Local security only - Debug ports (9222-9555) are opened locally and not secured
- **tasks.json**: No security impact - Contains only build task definitions
- **extensions.json**: Potentially significant for developers who install these third-party extensions; no impact for end-users

## Development Philosophy

This project balances team consistency with individual developer flexibility:

- **Harmonized Essentials**: Core tooling and formatting rules ensure code consistency and quality
- **Developer Autonomy**: Preferences like auto-save vs. manual save are left to individual choice
- **Opt-in Extensions**: Recommended extensions enhance the experience but remain optional
- **Manual Formatting**: Code formatting is triggered manually, giving developers control over when changes occur

Our goal is to provide a productive environment that feels natural to each team member while maintaining project standards.

## Recommended Extensions

Our extensions.json includes carefully selected tools organized by purpose:

### Core Development

- **ESLint** - Code quality enforcement and static analysis
- **Prettier** - Consistent code formatting

### TypeScript/JavaScript Productivity

- **Error Lens** - Inline error highlighting
- **TypeScript Importer** - Automatic import management
- **Pretty TypeScript Errors** - Improved error messages
- **Path Intellisense** - Path autocompletion
- **NPM Intellisense** - Package autocompletion

### Source Control & Collaboration

- **GitLens** - Enhanced Git capabilities

### Documentation & Markdown Support

- **Markdown All in One** - Complete markdown support
- **Markdown Mermaid** - Diagram support in markdown
- **Markdown PDF** - Export markdown to PDF
- **PDF Viewer** - View PDFs within VS Code

### Web Technologies

- **Web Validator** - HTML/CSS validation

### Quality of Life

- **Material Icon Theme** - Custom file and folder icons for improved navigation

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

## Troubleshooting

If debugging fails to launch:

1. Check if "electron-forge start" works from terminal
2. Verify port 9222 isn't in use by another process
3. Try selecting "Debug All Processes" configuration
