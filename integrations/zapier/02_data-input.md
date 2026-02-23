# Data Input

Data input is configured in the Eledo step under the `Configure` tab.

First, select a template. Once selected, Zapier automatically retrieves the template schema and generates a dynamic UI form that mirrors all template fields.

This is currently the only supported way to bind your data to template fields in Zapier.

![Zapier Dynamic Form.](/assets/integrations/zapier/zapier-dynamic-form.png)

---

## Assigning data to template fields

Because the form structure matches your template exactly, assigning data is straightforward.

> Note: In Zapier, all input values are treated as text. Whether the original value is a number, date, or string, it is passed to Eledo as text.

You have three options when filling template fields:

- Map the field to data from a previous step in your Zap  
- Enter a static value that will be used in every execution  
- Leave the field empty  

You are not required to populate every field. It is up to you to decide which fields should receive data and how.

---

### Assigning a static value

To enter a static value, click the desired field and type the text directly.

![Zapier Static Text.](/assets/integrations/zapier/zapier-static-text.png)

---

### Assigning a dynamic value

Dynamic values come from previous steps in your Zap — for example, a column from Google Sheets.

To insert dynamic data:

1. Click the `+` icon next to the field.
2. Select a value from the available list.

Zapier displays all outputs from previous steps in a searchable panel.

> Note: Make sure a data source step (such as Google Sheets) is properly added and configured before mapping dynamic values. Otherwise, Zapier will prompt you to configure one.

![Zapier Data Binding.](/assets/integrations/zapier/zapier-data-binding.png)

Zapier allows you to insert multiple values into a single field. In such cases, the values are typically combined into a single text string.

In most scenarios, one value is mapped to one template field.

---

## Complex data

Zapier’s dynamic UI supports not only simple fields (text, number, date) but also structured objects defined in your template.

For example, if your template contains a nested object like a `Client` section, Zapier will display its fields grouped together.

From your perspective, this behaves the same way as filling simple fields — you assign values individually to each visible field.

![Zapier Complex Object.](/assets/integrations/zapier/zapier-complex-object.png)

---

## Limitations

At the moment, Zapier does not support adding multiple items to array-type fields.

If your template contains a repeatable structure (for example, a list of `Items`), Zapier allows you to define only a single item.

For more advanced scenarios involving arrays, consider using n8n or Make, which provide more flexible data structures.