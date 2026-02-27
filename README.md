# Eledo Documentation Repository

This repository contains the structured Markdown source for Eledo documentation.

The purpose of this repository is to:

* Maintain clean version control of documentation
* Reduce duplication across integrations
* Improve structural consistency
* Provide a scalable foundation for future documentation growth

This repository is currently private and serves as the authoritative writing workspace. Content may be mirrored to the Eledo website using existing tooling.

---

## Scope

This repository focuses on documentation architecture and content organization.

It does **not** currently:

* Replace the existing Eledo website
* Introduce a new static site generator
* Modify production deployment workflows

All changes are incremental and aligned with existing constraints.

---

## Repository Structure

```
/assets           → Images and static assets
/drafts           → Work-in-progress articles and structural experiments
/integrations     → Integration-specific documentation
/rendering        → Shared Eledo documentation topics (optional, reusable content)
/template-engine  → Shared Eledo documentation topics (optional, reusable content)
```

Example:

```
/integrations/n8n/
```

Each integration has its own subtree.

Shared topics may be referenced rather than duplicated.

---

## Writing Principles

Documentation should be:

* Clear and human-readable
* Structurally consistent
* Free from marketing language
* Modular (avoid repetition)
* Focused on “how”, not “why”

Marketing content belongs on the main website.
Blog content belongs in the blog.
Documentation belongs here.

---

## Workflow

1. Design structure first.
2. Create article skeletons.
3. Write content in Markdown.
4. Review for duplication and clarity.
5. Mirror content to Eledo website.

Future enhancements (optional):

* Static site generation
* CI/CD deployment
* Unified documentation hosting

---

## Status

Initial focus: n8n integration documentation.

This subtree will serve as a reference implementation for improved documentation structure.

---

Maintained by: Eledo Documentation Team
