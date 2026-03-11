# Eledo Documentation Repository

This repository contains the **Markdown source and development environment** for the Eledo documentation.

It provides a structured and version-controlled workspace for maintaining documentation and improving its internal architecture.

⚠️ **Important**

This repository is used for **internal development and documentation maintenance only.**

Users looking for official documentation should visit:

https://eledo.online/documentation

This repository may contain experimental structures, drafts, or documentation changes that are not yet published on the production website.

---

# Purpose of this Repository

The goal of this repository is to:

- Maintain clean version control of documentation
- Reduce duplication across integrations
- Improve structural consistency
- Provide a scalable foundation for future documentation growth
- Enable easier authoring and structural improvements

The documentation is written in **Markdown** and organized in a modular structure to support long-term maintainability.

---

# Scope

This repository focuses on **documentation architecture and content organization.**

It currently does **not**:

- Replace the existing Eledo website
- Directly modify production deployment workflows

Documentation written here may later be mirrored or integrated into the main website.

---

# Writing Principles

Documentation should be:

- Clear and human-readable
- Structurally consistent
- Free from marketing language
- Modular (avoid repetition)
- Focused on **"how"**, not **"why"**

Marketing content belongs on the main website.  
Blog content belongs in the blog.  
Documentation belongs here.

---

# Workflow

Typical documentation workflow:

1. Design structure first
2. Create article skeletons
3. Write content in Markdown
4. Review for duplication and clarity
5. Mirror content to the Eledo website

Future enhancements (optional):

- Static site generation
- CI/CD deployment
- Unified documentation hosting

---

> The original documentation structure is preserved in the tag: `docs-baseline-2026-03`

Maintained by: **Eledo Documentation Team**

---

# Documentation Development Environment

This repository includes a **Docusaurus environment** to make documentation development easier.

Docusaurus allows contributors to preview documentation locally, navigate the structure, and verify formatting before publishing.

The generated site can also be deployed to **GitHub Pages for internal preview**.

---

# Local Development

This website is built using [Docusaurus](https://docusaurus.io/), a modern static documentation generator.

## Installation

```bash
yarn
```

## Start Development Server

```bash
yarn start
```

This command starts a local development server and opens a browser window.

Changes are reflected live without restarting the server.

---

# Build

```bash
yarn build
```

This command generates static content into the `build` directory.

The result can be served using any static hosting service.

---

# Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Without SSH:

```bash
GIT_USER=<your GitHub username> yarn deploy
```

If GitHub Pages is used for hosting, this command builds the website and pushes it to the `gh-pages` branch.

---

# Future Direction

The Docusaurus environment currently serves as a **documentation development tool**.

Possible future directions include:

- Full documentation migration to Docusaurus
- Automated documentation publishing
- Unified documentation hosting

These changes will be evaluated based on Eledo platform evolution.