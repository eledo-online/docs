# Overview

## What is Eledo?

Eledo is a service for generating PDF documents through automation.

Imagine running an e-shop and needing to create an invoice for every order. With Eledo, this process can be fully automated.

You need two things:

1. A template — you define what the document should contain (for example: name, address, order details).
2. A connection between Eledo and your data — this is usually done via integrations such as Zapier, Make, monday.com, or n8n.

The setup is done once. After that, Eledo runs silently in the background.

Templates are created using our visual editor. We also support fillable PDF forms, which are handled as a specific template type.

---

## Eledo + Zapier integration

Eledo offers official support for Zapier. The Eledo app is already available on the platform—there is nothing to install.

A typical flow is straightforward:

1. Create a new Zap (Zapier calls an automation workflow a “Zap”).
2. Select an app that produces a trigger event—for example, Google Sheets.
3. Add Eledo as an action step.
4. In Eledo, select a template and map your input fields.
5. Optionally, add more steps—for example, upload the generated PDF to Google Drive or send it by email.

Once configured, Eledo becomes just another building block in your Zap.

In the following pages, we explain everything step by step—starting with simple examples and high-level concepts, then covering practical use cases and key limitations.

The goal is clarity. You should know what to expect at each step.

---

## Designed to be practical

Eledo is designed to be tolerant to incomplete input.

If you send partial data, we still attempt to render the PDF. Missing fields will remain empty, but the document will be generated.

We chose this strategy deliberately—because in many real-world scenarios, receiving a partially filled document is better than receiving no document at all.

For complex templates with repeatable items, Zapier may support only a single item entry—see Limitations.

---

## What to expect in this documentation

This documentation is split into focused sections. You do not need to read everything—open the part relevant to your current task.

We cover:

* Adding Eledo to your Zap
* Authentication setup
* Data input
* Data output
* Limitations and troubleshooting
* Step-by-step guides for common scenarios

If something is unclear or missing, it means the documentation needs improvement—not that the feature is necessarily unsupported.