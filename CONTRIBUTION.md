# Contribution Guidelines — Eledo Documentation

**Date:** March 18, 2026

---

## Purpose

This document defines how documentation is created, maintained, and published for Eledo.

The goal is to minimize friction in authoring while preserving a consistent and reliable public documentation experience.

---

## Core Principle

> Documentation is authored in Git and published via CMS.

This establishes a **dual-system architecture**:

- **Git (Docusaurus)** → Source of truth, fast iteration, structured thinking
- **Eledo CMS** → Public-facing documentation, stable presentation

---

## System Overview

### 1. Authoring Layer (Git)

All documentation MUST be created and edited in the Git repository.

Benefits:
- Version control
- Structured hierarchy
- Easy refactoring
- Review via pull requests
- Low friction for iteration

---

### 2. Publishing Layer (CMS)

Eledo CMS is the official public documentation surface.

Responsibilities:
- Customer-facing content
- Stable navigation
- Consistent branding

---

## Workflow

### Step 1 — Create or Update Content

- Work in `/docs` directory
- Follow existing structure and naming conventions
- Keep content modular and reusable

---

### Step 2 — Review (Optional but Recommended)

- Use pull requests for significant changes
- Ensure clarity for target audience

---

### Step 3 — Sync to CMS (Manual Step)

After merging:

- Copy content to corresponding CMS page
- Ensure formatting matches CMS capabilities
- Verify links and navigation

---

## Sync Contract

Each document should have a clear mapping:

| Git Path | CMS Page | Owner |
|----------|----------|-------|
| /docs/... | URL / Page ID | Person responsible |

This mapping prevents drift between systems.

---

## Rules

### 1. Git is the Source of Truth

- No content should originate in CMS
- All changes must start in Git

---

### 2. No CMS-Only Edits

- If a change is made in CMS, it MUST be reflected back in Git
- Otherwise, the system will diverge

---

### 3. Structure First, Visuals Second

- Focus on clarity and hierarchy
- Avoid over-optimizing formatting for CMS

---

### 4. Write for the Audience

Documentation serves two main audiences:

- **Primary:** Technical users, builders, integrators
- **Secondary:** Business users, exploratory users

Ensure content is:
- Clear for primary audience
- Navigable for secondary audience

---

## Documentation Ownership

Documentation is organized into domains aligned with product areas.  
Each domain has a clearly defined owner responsible for maintaining it.

### Responsibilities of an Owner

Each owner is responsible for:

- **Content accuracy** — documentation reflects real product behavior  
- **Structure** — clear hierarchy and organization within their domain  
- **Git ↔ CMS synchronization** — no drift between systems  
- **Maintenance** — updating docs when the product evolves  

---

### Ownership Examples

| Domain        | Subdomain                     | Owner                  |
|---------------|-------------------------------|------------------------|
| Integrations  | Monday                        | Ľuboš Husivarga        |
| Integrations  | Make / n8n / Zapier           | Vladimír Záhradník     |

Ownership will expand as new areas are defined.

---

### Responsibility Rule

> If you build or modify a feature, you are responsible for its documentation.

This ensures documentation scales with the product and does not become a bottleneck.

---

### Notes

- Ownership does not mean exclusivity — others can contribute via pull requests  
- Owners are responsible for final review and consistency within their domain  
- All documentation must still follow the Git-first workflow

The documentation system was intentionally bootstrapped by a single author first to establish structure, workflow, and quality standards before broader contribution was introduced.

---

## Known Tradeoffs

This system introduces a deliberate inefficiency:

- Manual sync step

This is acceptable because it shifts friction away from:

- Frequent authoring ❌

and into:

- Infrequent publishing ✅

---

## Future Improvements

Potential enhancements:

- Automated Git → CMS sync
- CMS content generation
- Public documentation repository
- Contribution model for external users

---

## Philosophy

> Friction kills momentum. Systems accelerate it.

This documentation model prioritizes:

- Speed of thinking
- Ease of iteration
- Long-term scalability

over short-term convenience.

---

## Summary

- Write in Git
- Review in Git
- Publish to CMS
- Keep both layers aligned

This ensures documentation remains both **high-quality internally** and **consistent externally**.

