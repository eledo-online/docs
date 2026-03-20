---
title: Troubleshooting
sidebar_position: 6
---

# Troubleshooting

This section covers the most common issues encountered when using the Eledo module in Make.

---

## Authentication errors

If authentication fails:

* Verify that the **API Key** is entered correctly.
* Make sure there are no extra spaces before or after the key.
* Confirm that the API key is still valid in your Eledo account.
* Try generating a new API key and reconnecting the module.

Refer to the **[Authentication](./authentication.md)** section for detailed setup instructions.

---

## PDF is generated but fields are empty

If the generated PDF contains only static template text and no dynamic values:

* Ensure that fields in the Eledo module are properly mapped.
* Confirm that your source module (for example, Google Sheets) is correctly configured and returning data.
* Run the scenario once to verify that input data is present before the Eledo module executes.

Review the **[Data Input](./data-input.md)** section to confirm proper field mapping.

---

## Output not available in the next module

If you cannot find the generated file or URL in a subsequent module:

* Make sure the Eledo module has successfully executed.
* Open the mapping panel again to refresh available data.
* Run the scenario once to populate the output data.

Make exposes output fields only after a successful execution.

---

## Scenario does not run

If nothing happens:

* Make sure the scenario is enabled.
* Check that the trigger module is configured correctly.
* Verify that the scenario has been scheduled or triggered.
