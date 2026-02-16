# Troubleshooting

This section covers the most common issues encountered when using the Eledo node in n8n.

---

## Authentication Errors

If authentication fails:

* Verify that the **API Key** is correctly entered in the n8n credentials.
* Ensure there are no extra spaces when copying the key.
* Try generating a new API key in your Eledo account and updating the credential.

Refer to the **Authentication** documentation for full setup instructions.

---

## Empty or Unfilled PDF

If the generated PDF contains only static template text and no dynamic data, check the following:

* No fields were added in **Guided Fields** mode.
* The JSON payload is empty (`{}`) or `null`.
* Field names in JSON do not match the template exactly.

Review the **Guided Fields** and **JSON Mode** sections to confirm proper data mapping.

---

## JSON Errors

There are two types of JSON-related errors:

### 1. Invalid JSON Syntax

If the JSON is malformed (missing brackets, commas, or quotation marks), n8n will return a validation error before sending the request.

Ensure your JSON:

* Uses proper quotation marks
* Has matching `{}` and `[]`
* Does not contain trailing commas

### 2. Template Validation Errors

If the JSON syntax is valid but the structure does not match the template, Eledo may return an error message explaining the issue.

Review the template structure in the Eledo **API** section and verify that field names and nesting match exactly.

---

## Node Not Visible in n8n

If you cannot find the Eledo node in n8n:

* Confirm that the node is installed.
* Ensure you are the **instance owner** (required for installing verified community nodes).
* Restart your n8n instance after installation if necessary.

Refer to the **Installation** section for detailed instructions.
