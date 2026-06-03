# GitHub Copilot Lab: Node Calculator

<img width="400" alt="Node Calculator image" src="./assets/Node%20calculator%20image.png">

This repository is a workshop-ready Node.js calculator app used to practice modern GitHub Copilot workflows in VS Code.

The app includes:

- an Express API route at `/arithmetic`
- a browser-based calculator UI
- Mocha/Chai/Supertest integration tests
- workshop guides in the `.instructions` folder

Estimated workshop time: `30-90 minutes`

## Quick Start

### Prerequisites

- Node.js `18+` (Node `20` or `22` recommended)
- npm
- VS Code with `GitHub Copilot` and `GitHub Copilot Chat`

### Install and run

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Validate the project

```bash
npm run typecheck
npm run lint
npm test
```

## Workshop Guides

Workshop content lives in `.instructions`:

Filename | Description
--- | ---
[1. setup.md](./.instructions/1.%20setup.md) | Environment setup for local VS Code or Codespaces.
[2. core exercises.md](./.instructions/2.%20core%20exercises.md) | Guided Copilot exercises on this calculator app.
[3. challenge exercises.md](./.instructions/3.%20challenge%20exercises.md) | Optional extension tasks for participants.
[4. additional resources.md](./.instructions/4.%20additional%20resources.md) | Follow-up learning resources.
[workshop organisers.md](./.instructions/workshop%20organisers.md) | Delivery notes for facilitators.

## Project Structure

- `api/`: arithmetic endpoint and request handling
- `public/`: calculator UI (HTML/CSS/client logic)
- `test/`: API test suite and reporter config
- `.devcontainer/`: Codespaces and dev container setup
- `.github/workflows/`: CI pipeline

## Notes

- `npm start` runs the app directly with Node.
- `npm run dev` runs with `nodemon` for local development.
- `npm test` generates coverage and inlines the HTML report for easier artifact viewing.