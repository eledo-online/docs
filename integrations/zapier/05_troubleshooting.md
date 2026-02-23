# Troubleshooting

This section covers the most common issues encountered when using the Eledo app in Zapier.

---

## Authentication errors

If authentication fails:

* Verify that the **API Key** is entered correctly.
* Make sure there are no extra spaces before or after the key.
* Confirm that the API key is still valid in your Eledo account.
* Try generating a new API key and reconnecting the account in Zapier.

Refer to the **Authentication** section for detailed setup instructions.

---

## PDF is generated but fields are empty

If the generated PDF contains only static template text and no dynamic values:

* Ensure that fields in the Eledo step are properly mapped.
* Confirm that your trigger step (for example, Google Sheets) is correctly configured and returning data.
* Run a **Test** in Zapier to verify that input data is present before the Eledo step executes.

Review the **Data Input** section to confirm proper field mapping.

---

## File not available in the next step

If you cannot find the generated file in a subsequent step:

* Make sure the Eledo step has successfully executed.
* Click the `+` button again to refresh available dynamic fields.
* Run a test execution to populate the output data.

Zapier only exposes output fields after a successful test or run.