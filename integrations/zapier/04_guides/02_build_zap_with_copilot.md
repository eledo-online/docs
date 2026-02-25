# Build a Zap Using Copilot AI

## Introduction
In this guide we will demonstrate Zap building using `Copilot AI`. This guide will be intentionally brief.

The point is to show you where to start. But it is not possible to fully guide you step by step when using AI assistants.

Instead:
- We will adopt our [first guide](/integrations/zapier/04_guides/00_generate-first-pdf.md). If you get stuck, have a look at the original guide.
- We will tell you where to start and what to check to get the flow running

## What You Will Build

We will build a Zap with three components:

1. **Data source** — Google Sheets  
2. **Eledo** — PDF generation  
3. **Data sink** — Google Drive (stores generated PDFs)

Once you understand this pattern, you can adapt it to other data sources and storage systems supported by Zapier.

---

## Step 1 — Create a Simple Template in Eledo

For this guide, we will use a simple template with only a few dynamic fields.

Instead of creating a template from scratch, we recommend selecting one from the public template library and modifying it. This allows you to get started quickly.

If you prefer to create a template manually, refer to:  
https://eledo.online/documentation/template

### Instructions

1. Log into your Eledo account.
2. Open **My Templates**.
3. Click **From Library** to access the public template catalog.
4. Select a template and click **Try it out**.  
   This creates a private copy under your account.
5. For this guide, select **Certificate of Attendance**.

You can freely modify your private copy.

![Certificate of Attendance](/assets/integrations/shared/public-template-certificate.png)

---

### Optional — Inspect the Data Structure (Advanced)

In the left-side menu, open **Profile → API** to see the full data model.

You can review the payload inside the `HTTP Request Body` section. This may help you understand how fields are structured before mapping them in Zapier.

![Certificate Template Data Model](/assets/integrations/shared/certificate-template-data-model.png)

---

## Step 2 — Create a Google Sheet document

Create a Google Sheet with the following structure:

| Name  | Surname |
|-------|---------|
| John  | Smith   |
| Peter | File    |

Each row represents one student.

![Google Sheet Document](/assets/integrations/shared/google-sheet-doc.png)

> The first row must contain headers. Zapier automatically uses these headers (`Name`, `Surname`) as property names.

---

## Step 3 — Ask Copilot AI to create a Zap for you

There are two steps you have to make:
1. Create a new (empty) Zap
2. Right at the top there is a Copilot AI prompt where you can tell what you need. Describe the flow you want in human words. See the screenshot below as an example.

![Zapier Copilot AI](/assets/integrations/zapier/zapier-copilot.png)

Afterwards, Copilot will guide you with the process.

- It will ask you to enter your credentials into Google Sheets, Google Drive and Eledo
- It will test whether the apps are properly set up
- It might ask for clarifying questions
- ...

Follow the instructions. It is safe to make incorrect settings while the Zap is not published. Just play around.

It is very likely that Copilot succeeds with setting up the basic flow but it will just make sure the apps can communicate. If Copilot gets stuck, it will tell you what is wrong. Once you fix it and Copilot doesn't continue, just instruct Copilot to proceed with the flow.

![Zapier Copilot AI Automated Build](/assets/integrations/zapier/copilot-automated-zap-build.png)

## Step 4 — Verify and correct
What you have to do is check and fix what was configured incorrectly:
- Very likely Copilot configured an improper Google Sheet as a data source. Verify and fix that.
- It is almost certain that Copilot didn't select a proper Eledo template.
- You will likely have to map the dynamic fields manually. See our [original guide](/integrations/zapier/04_guides/00_generate-first-pdf.md).
- Google Drive may point to incorrect folder.

These are the basic checks we recommend to do. Afterwards you can test the flow and correct whatever else is standing out.

---

## What’s Next?

![Eledo Certificate Example](/assets/integrations/shared/eledo-certificate-example.png)

You now have a working automation:

Google Sheets → Eledo → Google Drive

From here, you can:

- Add more rows to your sheet and observe automatic generation  
- Replace Google Sheets with another trigger app  
- Replace Google Drive with email, CRM, or cloud storage

The pattern remains the same.
