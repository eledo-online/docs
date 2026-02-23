# Data Input

Data input is configured in Eledo app at the `Configure` tab. First you have to select a template. Once you do that, Zapier automatically fetches the template schema and creates a dynamic UI form with all the data. This is the most straight-forward and currently the only way to bind your existing data with the template fields.

![Zapier Dynamic Form.](/assets/integrations/zapier/zapier-dynamic-form.png)

## Assigning data to template fields
With the UI form that perfectly matches the template, your work is already simplified.

> Note: When it comes to Zapier, all your data is treated as a text - whether it is a number, a date or an actual text.

When it comes to assigning data to the template fields, you have three options:
- You bind the field to the data from a previous app in the Zap
- You fill the field with a static text that is used in every flow
- You keep the field unpopulated

We specifically mention all three options because you are not obliged to fill the data at all. It is up to you to decide which fields need to be filled and with which data.

### Assigning a static text
To assign a static text, just click the desired field and type whatever text you want. See the image below for illustration.

![Zapier Static Text.](/assets/integrations/zapier/zapier-static-text.png)

### Assigning a dynamic text
Dynamic text maps to a real value, for example it might be a specific column in your Google Sheets table. Adding it is similar to the static text, except you click the `+` sign next to the field. Then you are shown a dialog with all available values you might map to the field.

> Note: Make sure you have a proper data source app (like Google Sheets) added into your Zap, and properly configured. Otherwise, Zapier will warn you about this and instruct you to add such app into the Zap.

![Zapier Data Binding.](/assets/integrations/zapier/zapier-data-binding.png)

Zapier allows you to select more than one value for the given field. Likely, the values are then concatenated into a text. In most cases, you map one value into one template field.

## Complex data
Zapier dynamic forms UI supports not just primitive fields like a text, number or date but also complex objects that might contain these fields.

For you this is transparent. You just fill out the data the same way as if it were simple text files.

![Zapier Complex Object.](/assets/integrations/zapier/zapier-complex-object.png)

---

## Limitations

At the moment, Zapier does not allow you to add an array of items. You are allowed to enter just one item.
