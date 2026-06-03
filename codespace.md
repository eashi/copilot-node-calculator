# Using GitHub Codespaces

## Why use Codespaces for this lab?

GitHub Codespaces gives participants a consistent, ready-to-run workshop environment without local setup drift.

## Start a codespace

1. Open this repository on GitHub.
2. Select **Code**.
3. Open the **Codespaces** tab.
4. Choose **Create codespace on main**.

Codespaces will detect `.devcontainer/devcontainer.json` and provision the environment automatically.

## First run inside the codespace

1. Open the integrated terminal (`Terminal > New Terminal`).
2. Install dependencies:

```bash
npm install
```

3. Start the app in watch mode:

```bash
npm run dev
```

4. Open the forwarded port for `3000` when prompted and verify the calculator UI loads.

## Validation commands

Run these before committing workshop changes:

```bash
npm run typecheck
npm run lint
npm test
```

## Notes for facilitators

- The devcontainer installs Copilot extensions automatically.
- If Copilot is unavailable after launch, ask participants to sign in and reload the window.
