---
title: Authentication
sidebar_position: 2
---

# Authentication

Authentication allows Make to securely communicate with your Eledo account.

Without authentication, Eledo does not know which account should process the request and cannot generate documents on your behalf.

This integration uses a simple **API Key**.

---

## Step 1 — Create an API Key in Eledo

1. Log into your Eledo account at [https://eledo.online/](https://eledo.online/)
2. Click **Profile** in the left-side menu
3. Open the **API** tab under the *Your Profile* section
4. Copy your API key

If you do not have an API key yet, you can generate one in this section.

![API key location inside Profile → API.](/img/integrations/shared/eledo-api-key.png)

---

## Step 2 — Create a Connection in Make

Open your scenario and add an Eledo module.

At the top of the module configuration window, locate the **Connection** field.

If this is your first time setting up authentication:

1. Click `Add`
2. Enter a name for the connection
3. Paste your API key into the appropriate field
4. Confirm the dialog to save the connection

![Eledo Auth using API Key.](/img/integrations/make/eledo-make-auth.png)

After completing these steps, the connection will appear in the **Connection** field and can be reused in other Eledo modules.

You can add multiple Eledo connections. Make allows you to choose which connection should be used in each scenario.

> Note: Make usually tests the connection when you create it. If the API key is valid, the connection is saved and becomes available for selection. If not, Make displays an error message explaining the issue.

If you receive an error:

* Verify that the API key was copied correctly
* Ensure your internet connection is active
* Try generating a new API key in Eledo and updating the connection

---

## Notes

* You can generate a new API key at any time under **Profile → API**.
* If you regenerate the key, remember to update it in any existing Make connections.
* Invalid or outdated API keys are the most common cause of authentication errors.

Once authentication is complete, you can proceed to selecting a template and mapping your data.
