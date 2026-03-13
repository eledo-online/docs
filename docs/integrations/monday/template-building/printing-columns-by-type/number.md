---
title: Number Column
sidebar_position: 2
---

# Printing Number Column

To print a value from a Number column from your monday.com board, follow these steps:  
- In Eledo editor, click on a **Text box** component from top toolbar. Configuration window will appear.
- Click into **Data (expression)** field to open Data Expression builder.
- Find and select a number column using the Fields navigation menu. Start with the **item** and continue with **number** for example.
- If you need to format this value, try one of our [number formatting functions](/docs/product/data-expressions/number-functions.md) such as [CURR](/docs/product/template-building-guides/formatting-numbers.md) or [NUM](/docs/product/template-building-guides/formatting-numbers.md) 
- Confirm twice and you're done! Dynamic text component will be placed at cursor position.

![image](/img/integrations/monday/MondayPrintNumberColumn.gif)

### Formatting Numbers
**Currency Format**

Print number in currency format with the CURR() function. This function prints decimal and thousands separators. The separator types depends on Locale setting of your template. Parameters specify the number of leading zeroes and decimal places. This function does not round the number.

`CURR(value, leading_zeroes, decimal_places)`

*Example:*

item.number = 56789.996

`CURR(item.number, 0, 2)`   Output: 56,789.99

**Number format**

Format a numerical value with the NUM() function. Compared to CURR function, this one does not print thousands separators. Parameters specifies the number of leading zeroes and decimal places. Decimal separator type depends on Locale setting of your template. This function does not round the number.

`NUM(value, leading_zeroes, decimal_places)`

*Example:*

item.number = 12345

`NUM(item.number, 0, 2)`  Output: 12345.00

`NUM(item.number, 8, 0)`  Output: 00012345

**Tips:**

To properly round the number you will need to use the ROUND() function:

item.number = 1234.567

`CURR(ROUND(item.number, 2), 0, 2)`  Output: 1234.57

If you want to add a currency sign, use the CONCAT() function:

item.number = 56789.996

`CONCAT("$", CURR(item.number, 0, 2))`  Output: $56,789.99

Find more information about number formatting in this article: [Formatting Numbers](/docs/product/template-building-guides/formatting-numbers.md)

Discover all the number functions here: [Number Functions](/docs/product/data-expressions/number-functions.md)
