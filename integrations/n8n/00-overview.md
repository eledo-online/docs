# Overview

## What is Eledo?

Eledo is a service for generating PDF documents through automations.

Imagine running an e‑shop and needing to create an invoice for every order. With Eledo, this process can be automated.

You need two things:

1. A template — you define what information should be filled in (for example: name, address, order details).
2. A connection between Eledo and your data — this is usually done using integrations like Zapier, Make, Monday, or n8n.

The setup is done once. After that, Eledo works silently in the background.

Templates are created using our visual editor on the website. We also support PDF forms, which are handled as a slightly different type of template.

---

## Eledo n8n Community Node

This is the official integration of Eledo into the n8n ecosystem.

The basic flow is straightforward:

1. Create a new n8n workflow.
2. Add the Eledo node.
3. Select a template and map your data fields.
4. Connect the node to the rest of your workflow.

Once configured, the node becomes just another building block in your automation.

In the following pages, we explain everything step by step. We start with high‑level concepts and simple examples. Then we go deeper into advanced options, use cases, and limitations.

The goal is clarity. You should know what to expect at each step.

---

## Designed to Be Practical

Eledo was designed to be tolerant to errors.

If you send incomplete data, we still attempt to render the PDF. Missing fields will remain empty, but the document will be generated.

We chose this strategy deliberately. In many real‑world scenarios, receiving a partially filled document is better than receiving no document at all.

---

## What to Expect in This Documentation

This documentation is split into focused sections. You do not need to read everything — open the part relevant to your current task.

We cover:

* Installation on both hosted n8n and self‑hosted instances
* Authentication setup
* Guided fields (recommended for most users)
* JSON mode (for advanced control)
* Working with returned data
* Limitations and troubleshooting
* Step‑by‑step guides for common scenarios

If something is unclear or missing, it means the documentation needs improvement — not that the feature is unsupported.
