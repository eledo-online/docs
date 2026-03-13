---
title: Multiple Items in a Single PDF
sidebar_position: 2
---

# Multiple Items in a Single PDF

Printing multiple items into single PDF differs from single item and your Eledo template should be amended to support it.

When single item or multiple items are transfered from monday.com into Eledo template, they are stored in **item** and **items** variables. The **items** always contains a list of all the items passed to the template (one or more) and **item** refers to either first item from the list or item which triggered the automation.

## Preparing template

Usually you print multiple items into a table, one row per item, but thanks to flexibility of Block Repeater you can repeat not just table rows, but also list items, paragraphs or any other container in the template. Data expression for Block Repeater in this case is simply: **items**

Create a two row table, one for column names and another one for the values. It is good idea to set the table width to desired dimension. Move your cursor into the second table row and click Block Repetition.

Configuration window opens and you may notice the Selected Block is Table Cell (TD), but we want to repeat the whole Table Row. We need to click on Select Parent Block to change our Block Repetition selection to the row.

Now we can populate data expression for the repetition, which is simply **items**

![image](/img/integrations/monday/MondayItemsTableRowBlockRepetition.gif)

To print columns you need to place Text Box into the yellow table row where the Block Repeater is applied. Eledo expression builder helps you to populate data expression for the Text Boxes, simply select them from dropdown suggestions.

![image](/img/integrations/monday/MondayItemsTableTextBoxes.gif)

## Integration Recipe setup

Template should be ready to print multiple items. But it is also required to use proper monday.com Integration Recipe which sends multiple items into your Eledo template.

There are only few of them and you can identify them by looking for **items** word in the sentence. Currently you should find the following sentences which supports multiple items:
 - When **Button** clicked create **Template** PDF from **Group** items and attach it to **Column**
 - When **Button** clicked create **Template** PDF with multiple items where **status** is **value** and attach it to **Column** of every matched item
- When **button** clicked   create **template** PDF with multiple items where **status** is **value** and attach it to column of source item.
 - When **Button** clicked create **Template** PDF with multiple items where **status** is **value** and send it to **Webhook URL**
 - Every **time period** create **template** PDF with multiple items where **status** is **value** and send it to **Webhook URL**
 - **Recurring** create **Template** PDF from **Group** items and send it to a **Webhook URL**

![image](/img/integrations/monday/monday_integration_recipe_multiple_items.png)
