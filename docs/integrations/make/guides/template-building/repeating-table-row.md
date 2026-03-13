---
title: Repeating Table Row
sidebar_position: 4
---

# Repeating Table Row

Every list of items or attachments can be printed using **Block Repetition**. It can turn any container like Table Row, Table itself, List Item or even Paragraph of your Eledo template into repeatable one.

Idea behind the Block Repetition is simple, design a block for one item, turn it into repeatable block and Eledo will print it as many times as there are items in your list. Let's learn by example.

#
Create a two row table, one for table headers and another one for the values. It is good idea to set the table width to desired dimension. Move your cursor into the second table row and click Block Repetition.

Configuration window opens and you may notice the Selected Block is Table Cell (TD), but we want to repeat the whole Table Row. We need to click on **Select Parent Block** to change our Block Repetition selection to the row.

Now we can populate data expression for the repetition, which can be simply: **Products**.

This setup ensures the table row will be repeated as many times as there are items in your list. But we need to specify the row content as well. We can use **Text Box** to print item's column values:

- In Eledo editor click on a **Text box** component from top toolbar. Configuration window will appear. 
- Click into **Data (expression)** field to open Data Expression builder.
- Type a word you want to represent the column value. It will be used as input field name. This word cannot contain a space nor special characters, just letters, numbers and underscore. For example: **Name**, **Quantity** and **DeliveryDate**.
- If you need to format this value, try one of our [text formatting functions](/docs/product/data-expressions/text-functions.md)
- Confirm twice and dynamic text component will be placed at cursor position.
- Don´t forget to Save the template.


![image](/img/integrations/make/RepeatingTableRowMake1.gif)

- In your make.com scenario click on Eledo module and refresh data from the template.
- Turn on the Map toggle, select **Array**, and submit. 
- Open the Array aggregator and choose your Target structure type.
- Data expression from the template has shown.
- Select columns from which you want to print values in those fields.
- Confirm and you're done!


![image](/img/integrations/make/RepeatingTableRowMake2.gif)
