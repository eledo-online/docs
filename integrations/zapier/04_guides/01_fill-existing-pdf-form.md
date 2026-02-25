# Fill an Existing PDF Form

## What You Will Build

This guide does not attempt to cover every possible template or app combination. Instead, it introduces a simple pattern that you can reuse and extend.

We will build a Zap with three components:

1. **Data source** — Google Sheets  
2. **Eledo** — PDF generation  
3. **Data sink** — Google Drive (stores generated PDFs)

Once you understand this pattern, you can adapt it to other data sources and storage systems supported by Zapier.

---

## Step 1 — Upload a fillable PDF into Eledo

For this guide, we have prepared a sample fillable PDF. While you may use any PDF, we recommend using ours so it is easier to follow along.

### Instructions

1. Download a sample PDF from [this link](/assets/integrations/shared/pdf-form.pdf)
2. Log into your Eledo account.
3. Open **My Templates**.
4. Click **Upload PDF**, select your file and give it a proper name.

![Fillable PDF Upload](/assets/integrations/shared/fillable-pdf-upload.png)

---

## Step 2 — Map PDF form fields to Eledo data fields

Although the PDF already contains fillable fields, these are internal to the document. You must tell Eledo which fields to populate and with what data. Essentially, you are mapping internal PDF form fields to the Eledo data model.

> Note: It is entirely up to you which form fields you want to populate. You might map only certain fields. Equally you can add new fields into the document. Adding new fields is outside of scope of this guide.

Mapping the fields is straight-forward. Every form field has a correct type. You simply need to bind each field to a corresponding data name in Eledo. This is the field you will further use from inside n8n. See below for an example of how we mapped the `fullName` text field. Continue with the mapping for remaining fields.

![Fillable PDF Map Fields](/assets/integrations/shared/fillable-pdf-map-fields.png)

After you're done mapping the fields, hit `Save` button to store the changes. Now you have a proper Eledo template.

### Optional step — Check the full data structure in JSON
In the left-side drawer menu click on `API`. You will see the full data model. It helps you double-check your field mapping. See the payload inside `HTTP Request Body`.

![Verify Data Mapping](/assets/integrations/shared/pdf-form-verify-data-mapping.png)

---

## Step 3 — Create a New Zap

Create a new Zap and add three apps in this order:

- **Google Sheets** (trigger event)  
- **Eledo** (action event)  
- **Google Drive** (action event)

> Note: Configuration of Google Sheets and Google Drive authentication is outside the scope of this guide. Refer to official Zapier documentation for basic setup.

![Eledo Zap](/assets/integrations/zapier/eledo-zap-template.png)

---

## Step 4 — Configure Google Sheets

Create a Google Sheet with the following structure:

| fullName | nameId | gender | isMarried | city | notes |
| --- | --- | --- | --- | --- | --- |
| John Smith | 1 | Male | TRUE | Paris | Loves reading. |
| Peter File | 2 | Male | FALSE | London | Makes own music. |
| Valentina Rossi | 3 | Female | FALSE | Rome | Rides motorcycles. |

Each row represents one unique person.

![Google Sheet Document](/assets/integrations/shared/google-sheet-doc-2.png)

Set up a trigger so that the workflow runs when a row is added or updated.

> Note: The first row must contain headers. Zapier automatically uses these headers (`fullName`, `nameId`, ...) as property names.

In the Google Sheets node:

* Authenticate
* Select the correct document
* Select the appropriate sheet

In this example, we selected a document named **Eledo demo**.

![Google Sheet Zapier](/assets/integrations/zapier/google-sheet-zapier.png)

---

## Step 5 — Configure Eledo (Setup Tab)

The Eledo step is triggered by Google Sheets and generates a PDF document.

Open the Eledo step and stay on the **Setup** tab.

Set the **Action event** to **Create PDF Document**.

---

## Step 6 — Configure Authentication

In the Eledo step, locate the **Account** field.

If this is your first time using Eledo in Zapier, you need to connect your account.

Follow the **Authentication** documentation to configure your API key.

---

## Step 7 — Select a Template

Switch to the **Configure** tab in the Eledo step.

> At the moment, the Zapier integration lists only your private templates.

Select your copied template (for example: `Fillable PDF`).

Eledo always uses the latest version of the selected template. Selecting a specific template version is not currently supported.

Template names may differ slightly — this is expected.

---

## Step 8 — Bind Data

After selecting the template, Zapier displays a dynamic form matching the template structure.

### Why Your Sheet Might Have Less Columns

While the PDF form expects 6 parameters, it doesn't mean you have to store all of them in the table. For example, you might use the same `Notes` value for every generated PDF.

---

### Configure Form Fields

Each field is treated as text. It does not matter whether you insert a number, date, or string.

1. Bind values coming from the Google Sheets app for `fullName`, `nameId`, `gender`, `city`, `isMarried` and `notes`. Use the `*` button next to the field you want to map.
2. For some values, you might temporarily use static values just to see the effect.

See the screenshot below for reference.

![Dynamic Fields Configuration](/assets/integrations/zapier/eledo-zapier-dynamic-fields-2.png)

---

## Step 9 — Test the Eledo Step

Switch to the **Test** tab and click **Test step**.

If everything is configured correctly, Zapier will generate a PDF based on the first row of your sheet.

Download the file and verify the result.

---

## Step 10 — Configure Google Drive

Google Drive stores the generated PDFs.

Create a folder in Google Drive where documents will be uploaded.

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

![Dynamic Fields Configuration](/assets/integrations/zapier/zapier-google-drive.png)

---

## What’s Next?

![Eledo PDF Form Example](/assets/integrations/shared/eledo-pdfform-example.png)

You now have a working automation:

Google Sheets → Eledo → Google Drive

From here, you can:

- Add more rows to your sheet and observe automatic generation  
- Replace Google Sheets with another trigger app  
- Replace Google Drive with email, CRM, or cloud storage

The pattern remains the same.
