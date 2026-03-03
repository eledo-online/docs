# Creating PDFs for Each Subitem Separately

Eledo offers an integration recipe that allows you to generate a separate PDF document for each subitem in a parent item. This automation requires a template that includes at least one column from the subitem and the Files column ID at the subitem level, where the generated PDFs will be attached.

This recipe is triggered by a button click at the item level, and it generates PDFs for all subitems in a single run. Currently, it's not possible to generate PDFs for subitems individually or on demand per subitem.

## Template setup

To use this integration recipe, your Eledo template must include at least one field from a subitem. You may include all subitems in the document, but note that when the automation runs, the current subitem (the one the document is being created for) will appear first in the list of subitems in the generated PDF.

## Integration Recipe setup

You can find the relevant Integration Recipe in monday.com Integrations for Eledo:

- When **button** clicked create **Template** PDF for each subitem separately and attach it to subitem's **Files column ID**

To configure:

1. Select the button at the item level that will trigger the automation.

2. Choose the Eledo template that prints data from the subitems.

3. Provide the Files column ID manually—this value cannot be selected from a dropdown.

## How to Find the Files Column ID

To locate the Files column ID at the subitem level:

- Enable Developer Mode in monday.labs and copy column ID from 3 dots menu in column label.
![image](/assets/guides/monday_column_id.gif)

- Alternatively, open the Data Model menu in the Eledo template editor, then expand the item and subitem sections to find the Files column ID.