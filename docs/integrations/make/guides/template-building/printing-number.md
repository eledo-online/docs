---
title: Printing Number
sidebar_position: 2
---

# Printing Number

To print a number value into your PDF using Make.com, follow these steps:
- In Eledo editor click on a **Text box** component from top toolbar. Configuration window will appear. 
- Click into **Data (expression)** field to open Data Expression builder.
- Type a word you want to represent the number value. It will be used as input field name. This word cannot contain a space nor special characters, just letters, numbers and underscore. In our case we type **Quantity**
- If you need to format this value, try one of our [number formatting functions](/docs/product/data-expressions/number-functions.md) such as [CURR](/docs/product/template-building-guides/formatting-numbers.md) or [NUM](/docs/product/template-building-guides/formatting-numbers.md) 
- Confirm twice and dynamic text component will be placed at cursor position.
- Save the template and input field will be automatically created from the data expression.

![image](/img/integrations/make/NumberPrintingMake1.gif)

- In your make.com scenario click on Eledo module and refresh Custom Fields for the template.
- **Quantity** input field should be now available to be mapped with a number value.
- Click into Quantity field and choose one from your data source to map the value.
- Confirm and you're done!

![image](/img/integrations/make/NumberPrintingMake2.gif)

### Input Field Type
Types are derived from the data expression's variable context. In the example above the type will be a string, but it still can be populated with a number which will be automatically converted into a text format. Using number functions or operators over the Quantity variable will change the type to number.

### Formatting Numbers
Automatic conversion of the number value into a text brings inconsistentcy in displaying of the number in your document e.g. variable number of decimal places displayed. Therefore it is recommended to use number formatting functions to get your numbers displayed consistently in your document.

**Currency format**

Print number in currency format with the CURR() function. This function prints decimal and thousands separators. The separator types depends on Locale setting of your template. Parameters specify the number of leading zeroes and decimal places. This function does not round the number.

`CURR(value, leading_zeroes, decimal_places)`

*Example:*

Price = 56789.996

`CURR(Price, 0, 2)`   Output: 56,789.99

**Number format**

Format a numerical value with the NUM() function. Compared to CURR function, this one does not print thousands separators. Parameters specifies the number of leading zeroes and decimal places. Decimal separator type depends on Locale setting of your template. This function does not round the number.

`NUM(value, leading_zeroes, decimal_places)`

*Example:*

Price = 12345

`NUM(Price, 0, 2)`  Output: 12345.00

`NUM(Price, 8, 0)`  Output: 00012345

**Tips:**

To properly round the number you will need to use the ROUND() function:

Salary = 1234.567

`CURR(ROUND(Salary, 2), 0, 2)`  Output: 1234.57

If you want to add a currency sign, use the CONCAT() function:

Salary = 56789.996

`CONCAT("$", CURR(Salary, 0, 2))`  Output: $56,789.99


Discover all the number functions here: [Number Functions](/docs/product/data-expressions/number-functions.md)
