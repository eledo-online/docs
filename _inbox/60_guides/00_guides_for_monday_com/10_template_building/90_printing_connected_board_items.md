# Printing Connected Board Items

Every list of items, subitems, connected board items or even attachments can be printed using **Block Repetition**. It can turn any container like Table Row, Table itself, List Item or even Paragraph of your Eledo template into repeatable one.

Idea behind the Block Repetition is simple, design a block for one item, turn it into repeatable block and Eledo will print it as many times as there are items in your list. Let's learn by example.

## One Table Row per connected item
Create a two row table, one for column names and another one for the values. It is good idea to set the table width to desired dimension. Move your cursor into the second table row and click Block Repetition.

Configuration window opens and you may notice the Selected Block is Table Cell (TD), but we want to repeat the whole Table Row. Click on **Select Parent Block** to change our Block Repetition selection to the Table Row (TR).

Click into **Data (expression)** field to open Data Expression builder. Find and select an  **item** and continue with **connected_boards** in the navigation menu.

![image](/assets/guides/MondayPrintingConnectedItems1.gif)

This setup ensures the table row will be repeated as many times as there are connected items in your board. But we need to specify the row content as well. We can use **Text Box** to print column values from the connected item.

It is important to understand that Block Repetition is changing the data context. This means the data expressions of the Text Box does not have any prefix like **items** or **item.connected_boards**.

![image](/assets/guides/MondayPrintingConnectedItems2.gif)
