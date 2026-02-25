# Generate Your First PDF with Zapier

## What You Will Build

This guide does not attempt to cover every possible template or app combination. Instead, it introduces a simple pattern that you can reuse and extend.

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

[https://eledo.online/documentation/template](https://eledo.online/documentation/template)

### Instructions

1. Log into your Eledo account.
2. Open **My Templates**.
3. Click **From Library** to access the public template catalog.
4. Select a template and click **Try it out**.
   This creates a private copy under your account.
5. For this guide, select **Certificate of Attendance**.

You can freely modify your private copy.

![Certificate of Attendance](/assets/integrations/shared/public-template-certificate.png)


### Optional step — Check the full data structure in JSON
In the left-side drawer menu click on `API`. You will see the full data model. It might help you later when you map the fields in Zapier later. See the payload inside `HTTP Request Body`.

![Certificate Template Data Model](/assets/integrations/shared/certificate-template-data-model.png)

---

## Step 2 — Create a new Zap

Create a new Zap and add three apps (in this particular order):

* **Google Sheets** (data source, trigger event)
* **Eledo** (processor, action avent)
* **Google Drive** (storage, action event)

> Note: Configuration of Google Sheets and Google Drive nodes is outside the scope of this guide. Follow official Zapier documentation for authentication and basic setup.

![Eledo Zap](/assets/integrations/zapier/eledo-zap-template.png)

---

## Step 3 — Google Sheets Configuration

Create a Google Sheet with the following structure:

| Name | Surname |
| ---- | ------- |
| John | Smith   |
| Peter| File    |

Each row represents one student.

![Google Sheet Document](/assets/integrations/n8n/google-sheet-doc.png)

Set up a trigger so that the workflow runs when a row is added or updated.

> Note: The first row must contain headers. Zapier automatically uses these headers (`Name`, `Surname`) as property names.

In the Google Sheets node:

* Authenticate
* Select the correct document
* Select the appropriate sheet

In this example, we selected a document named **Eledo demo**.

![Google Sheet Zapier](/assets/integrations/zapier/google-sheet-zapier.png)

---

## Step 4 — Eledo Configuration

Our Eledo app is the second app in the Zap, after Google Sheets. It reacts on the trigger from Google Sheets and produces data that consumes Google Drive app.

Open the Eledo app and make sure you are at the `Setup` tab.

Set up `Action event` to `Create PDF Document`.

---

## Step 5 — Configure Authentication

Stay at the `Setup` tab or if you closed the Eledo configuration, reopen it.

Before Eledo can be used, credentials must be created. You will configure then in the `Account` field.

Follow the **Authentication** documentation to configure your API key.

---

## Step 6 — Select a Template

In the Eledo app, switch to the `Configure` tab.

> Note: At the moment, Eledo integration does not support template scope. It lists only your private templates.

Select your copied template (for example: `Copy of Certificate of Attendance`)

Eledo uses the latest version of the selected template. It is currently not possible to use a specific version.

> Template names may differ slightly. This is expected.

---

## Step 7 — Bind Data

After you have selected your template, a new dynamic form will be displayed where you can populate the data.

### Why Our Sheet Has Only Two Columns

It is not mandatory to fill in every single field. Also some fields may contain static text or you bind them with dynamic data fetched from the trigger app (Google Sheets in our example).

The certificate template contains more fields, but most are static (academy name, course title, instructor name, etc.).

Only the student’s **Name** and **Surname** change per row.

---

### Configure Form Fields
Each form field is treated as a text. It does not matter if you enter a number, a text or a date.

1. Fill in all static text fields that will never change. For example, `Organizer name`.
2. In fields where you want to add dynamic data (`Name`, `Surname`), click on the `+` button and select the proper data.

Refer to the screenshot below for a concrete example.

![Dynamic Fields Configuration](/assets/integrations/zapier/eledo-zapier-dynamic-fields.png)

---


## Step 8 — Test the Eledo configuration

Click on the **Test** tab and then on the `Test step` button.

If everything is configured correctly, you should see a URL link with a generated PDF for the first row in your sheet.

Download and verify the results.

---

### Step 9 — Google Drive Configuration

Google Drive is the last app in the Zap. It stores data created by Eledo.

Create a folder in Google Drive where generated PDFs will be stored.

In Zapier, open the Google Drive app and make sure you are on the initial `Setup` tab:
* Authenticate
* Select **Upload File** action event

### Set up uploading of PDFs to Google Drive

Now configure the Google Drive node to store the generated files.

Switch to a `Configure` tab where you choose a proper `Drive` and the target folder.

You need to map the `File` field to the Eledo PDF file reference. Optionally, you also need to set `File name`. In both cases, use the `+` button and map the fields to the proper data. See our image below.

![Dynamic Fields Configuration](/assets/integrations/zapier/zapier-google-drive.png)

## What’s Next?
![Eledo Certificate Example](/assets/integrations/shared/eledo-certificate-example.png)

You now have a working automation:

Google Sheets → Eledo → Google Drive

From here, you can:

* Add more rows to your sheet and observe automatic generation
* Experiment with dynamic expressions
* Replace Google Sheets or Google Drive with other integrations

The pattern remains the same.
