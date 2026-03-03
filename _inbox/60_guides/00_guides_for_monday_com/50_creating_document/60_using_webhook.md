# Using Webhook for advanced automation workflow

When uploading your PDF back to monday.com board is not sufficient, start your custom automation workflow by sending your PDF from Eledo to Webhook. Let's take a look how you can setup a simple [Make](https://www.make.com/en/register?pc=eledopdf) scenario to send PDF as an email attachment and also upload it back to monday.com board.

![Filtering subitems](/assets/guides/monday_webhook_integromat.png)

# Obtaining Webhook URL

Create new Make scenario and start with Webhook module. Create new webhook and copy its URL. The Make is now waiting for first webhook data, so it can determine the data structure for further processing.

![Filtering subitems](/assets/guides/monday_com_webhook/Integromat_new_Webhook.gif)

Add Integration Recipe to your monday.com board and use the webhook URL from your Make scenario. Then Trigger your Integration Recipe from monday.com board and wait for the confirmation in Make.

![Filtering subitems](/assets/guides/monday_com_webhook/monday_setup_recipe_with_webhook.gif)

Upon successful document creation by Eledo, you should get 'Successfully determined' message in Make webhook module.

![Filtering subitems](/assets/guides/monday_com_webhook/Integromat_webhook_wait.gif)

Data structure sent from Eledo to your webhook has two parts. First one contains transaction data in JSON format and second one is PDF itself in binary format. PDF file we can map directly to Email app and send it as an email attachment, or upload it to monday.com column of your board. But to extract valuable information from data JSON, we will need to use JSON Parse module right after the webhook module.

![Filtering subitems](/assets/guides/monday_com_webhook/Integromat_add_json_parser.gif)

To properly setup JSON parser, we need to create expected data structure. This varies based on used Eledo template, but have in common following fields:
 - boardId (number)
 - itemId (number)
 - file (collection)

File collection contains data which were used to create the PDF (including local variables). It does not contain every column value of your monday.com board item, only those which were printed into the PDF.

We will use a simple trick to setup the JSON Parser's data structure using generator. Start your Make scenario, trigger document creation from your monday.com board and then inspect the scenario's run. From the run log you can copy full JSON example data coming from Eledo beside your PDF file. Use this JSON data to generate data structure for JSON parser.

![Filtering subitems](/assets/guides/monday_com_webhook/make_generate_json_data_structure.gif)

# PDF post processing

We have the scenario's essentials setup and we can now execute any actions from any other app. You can now:
 - query monday.com to retrieve additional column values required
 - send an email with PDF attachment
 - upload PDF to monday.com, any drive or ERP
 - and many more...

Let's send the PDF as an email attachment:

![Filtering subitems](/assets/guides/monday_com_webhook/Integromat_email_attachment.gif)

And upload the PDF back to monday.com board:

![Filtering subitems](/assets/guides/monday_com_webhook/Integromat_upload_monday.gif)

