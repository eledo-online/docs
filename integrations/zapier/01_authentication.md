# Authentication

Authentication allows Zapier to communicate securely with your Eledo account.

Without authentication, Eledo does not know which account should receive the request and cannot generate documents for you.

This integration uses a simple **API Key**.

---

## Step 1 — Create an API Key in Eledo

1. Log into your Eledo account at [https://eledo.online/](https://eledo.online/)
2. Click on **Profile** (bottom-left corner of the screen)
3. Open the **API** tab under the *Your Profile* section
4. Copy your API key

If you do not have an API key yet, you can generate one in this section.

![API key location inside Profile → API.](/assets/integrations/shared/eledo-api-key.png)

---

## Step 2 — Create Account in Zapier

Open the Eledo app inside your Zap.

At the bottom of the `Setup` configuration panel, locate the field **Account**.

If this is your first time setting up authentication:

1. Click the `Select` button
2. Select **+ Connect a new account**
3. Paste your API key into the **API Key** field
4. Click on `Yes, continue to Eledo`


![Credentials window with API key.](/assets/integrations/zapier/auth-api-key.png)

Afterwards, the account will appear in the account list that can be displayed by clicking on `Select` button in the `Account` field. You can add as many accounts as you want. Zapier allows you to select the account you need for the specific Zap.

> Note: Zapier automatically tests the connection with Eledo. Either the flow succeeds and you will see the account in the list or your will see an error telling you what is wrong.

![Credentials window with API key - Error.](/assets/integrations/zapier/auth-api-key-error.png)

If you receive an error:

* Verify that the API key was copied correctly
* Ensure your internet connection is active
* Try generating a new API key in Eledo and updating the credential

---

## Notes

* You can generate a new API key at any time under **Profile → API**.
* If you regenerate the key, remember to update it in your Zap as well.
* Invalid or outdated keys are the most common cause of authentication errors.

Once authentication is complete, you can proceed to configuring your template and mapping data.
