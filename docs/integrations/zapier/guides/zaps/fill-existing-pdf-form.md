---
title: Fill an Existing PDF Form
sidebar_position: 2
---

# Fill an Existing PDF Form with Zapier

## What You Will Build

This guide introduces a practical pattern for filling an existing PDF form using Zapier and Eledo.

We will build a Zap with three components:

1. **Data source** — Google Sheets  
2. **Eledo** — PDF generation  
3. **Data sink** — Google Drive (stores generated PDFs)

Once you understand this structure, you can adapt it to other data sources and storage systems supported by Zapier.

---

## Step 1 — Upload a Fillable PDF into Eledo

For this guide, we prepared a sample fillable PDF. You may use any PDF form, but using the sample makes it easier to follow along.

### Instructions

1. Download the sample PDF from [this link](/assets/integrations/pdf-form.pdf)
2. Log into your Eledo account.
3. Open **My Templates**.
4. Click **Upload PDF**, select your file, and provide a template name.

![Fillable PDF Upload](/img/integrations/shared/fillable-pdf-upload.png)

---

## Step 2 — Map PDF Form Fields to Eledo Data Fields

Although the PDF already contains fillable form fields, these fields are internal to the document. You must explicitly define which fields Eledo should populate and how they map to your data model.

In other words, you are mapping internal PDF form fields to Eledo data fields.

> Note: You are not required to map every form field. You may populate only selected fields. Adding new PDF form fields is outside the scope of this guide.

Mapping is straightforward:

- Each PDF form field has a type (text, checkbox, etc.).
- You assign a corresponding data field name in Eledo.

Below is an example of mapping the `fullName` field.

![Fillable PDF Map Fields](/img/integrations/shared/fillable-pdf-map-fields.png)

Repeat the process for the remaining fields.

After completing the mapping, click **Save**. You now have a fully usable Eledo template based on your PDF form.

---

### Optional — Verify the Data Structure (Advanced)

Open **Profile → API** in the left-side menu.

You can inspect the payload inside the `HTTP Request Body` section. This helps verify that your field mapping matches the expected data structure.

![Verify Data Mapping](/img/integrations/shared/pdf-form-verify-data-mapping.png)

---

## Step 3 — Create a New Zap

Create a new Zap and add three apps in this order:

- **Google Sheets** (trigger event)  
- **Eledo** (action event)  
- **Google Drive** (action event)

> Note: Configuration of Google Sheets and Google Drive authentication is outside the scope of this guide. Refer to official Zapier documentation for basic setup.

![Eledo Zap](/img/integrations/zapier/eledo-zap-template.png)

---

## Step 4 — Configure Google Sheets

Create a Google Sheet with the following structure:

| fullName | nameId | gender | isMarried | city | notes |
|----------|--------|--------|-----------|------|-------|
| John Smith | 1 | Male | TRUE | Paris | Loves reading. |
| Peter File | 2 | Male | FALSE | London | Makes own music. |
| Valentina Rossi | 3 | Female | FALSE | Rome | Rides motorcycles. |

Each row represents one person.

![Google Sheet Document](/img/integrations/shared/google-sheet-doc-2.png)

Configure the trigger so the Zap runs when a row is added or updated.

> The first row must contain headers. Zapier automatically uses these headers (`fullName`, `nameId`, etc.) as property names.

In the Google Sheets step:

- Authenticate your account  
- Select the correct spreadsheet  
- Select the appropriate worksheet

In this example, we selected a document named **Eledo demo**.

![Google Sheet Zapier](/img/integrations/zapier/google-sheet-zapier.png)

---

## Step 5 — Configure Eledo (Setup Tab)

The Eledo step is triggered by Google Sheets and generates the completed PDF form.

Open the Eledo step and remain on the **Setup** tab.

Set the **Action event** to **Create PDF Document**.

---

## Step 6 — Configure Authentication

In the Eledo step, locate the **Account** field.

If this is your first time using Eledo in Zapier, connect your account by providing your API key.

Refer to the **[Authentication](../../authentication.md)** documentation for detailed instructions.

---

## Step 7 — Select the Template

Switch to the **Configure** tab in the Eledo step.

> The Zapier integration lists only your private templates.

Select your uploaded template (for example: `Fillable PDF`).

Eledo always uses the latest published version of the template. Selecting a specific version is not currently supported.

---

## Step 8 — Bind Data

After selecting the template, Zapier generates a dynamic form that mirrors the mapped PDF fields.

### Why Your Sheet Might Contain Fewer Columns

Even if the PDF form expects multiple fields, you do not need to store all values in Google Sheets. Some values may remain static or be reused across documents.

---

### Configure Form Fields

Each field is treated as text, regardless of whether you enter a number, date, or string.

1. Bind dynamic values from Google Sheets for `fullName`, `nameId`, `gender`, `isMarried`, `city`, and `notes` using the `+` button next to each field.
2. You may temporarily enter static values to test visual output.

See the screenshot below for reference.

![Dynamic Fields Configuration](/img/integrations/zapier/eledo-zapier-dynamic-fields-2.png)

---

## Step 9 — Test the Eledo Step

Switch to the **Test** tab and click **Test step**.

If configured correctly, Zapier generates a PDF using the first row from your sheet.

Download and verify the result.

---

## Step 10 — Configure Google Drive

Google Drive stores the generated PDF documents.

Create a target folder in Google Drive.

In the Google Drive step:

1. Authenticate your account.
2. Select **Upload File** as the action event.

---

### Configure File Upload

Switch to the **Configure** tab in the Google Drive step.

- Select the target **Drive**.
- Select the target **Folder**.
- Map the **File** field to the **File** output from Eledo.
- Optionally, map the **File Name** field.

Use the `+` button to insert dynamic values.

![Dynamic Fields Configuration](/img/integrations/zapier/zapier-google-drive.png)

---

## What’s Next?

![Eledo PDF Form Example](/img/integrations/shared/eledo-pdfform-example.png)

You now have a working automation:

Google Sheets → Eledo → Google Drive

From here, you can:

- Add more rows and observe automatic form filling  
- Replace Google Sheets with another trigger app  
- Replace Google Drive with email, CRM, or cloud storage

The automation pattern remains the same.
