# Printing Formula Column

To print a value ​​from a Formula Column from your monday.com board, follow these steps:
- In Eledo editor click on a **Text box** component from top toolbar. Configuration window will appear. 
- Click into **Data (expression)** field to open Data Expression builder.
- Find and select a formula column using the Fields navigation menu. Start with the **item** and continue with **formula** for example.
- Confirm twice and you're done! Dynamic text component will be placed at cursor position.

## Limitations

Formula support by monday.com API is in early release phase and has some limitations:
 - Formulas that use mirror columns are not supported.
 - You can retrieve up to 10,000 formula values per minute.
 - You can query up to five formula columns in one request.

# Workaround

If your formulas are not transferred over monday.com API and therefore not printed into your document, you can rrewrite your formula into data expression and calculate the value directly in your Eledo template.

To do this, simply write your formula in the Text Box's data expression.

Example:

`(item.number0 - item.number1) * item.number2`

If you are unsure, or something doesn't work as expected, contact Eledo support, who will be happy to help.

To print a value(s) ​​from a Formula Column from your monday.com board, follow these steps:
- In Eledo editor click on a **Text box** component from top toolbar. Configuration window will appear. 
- Click into **Data (expression)** field to open Data Expression builder.
- Compose your formula using [operators](https://eledo.online/documentation/data_expressions/operators) or [Eledo functions](https://eledo.online/documentation/data_expressions/number_functions) and columns you can find using the Fields navigation menu.
- Confirm twice and you're done!  Dynamic text component will be placed at cursor position.

![image](/assets/guides/MondayPrintingFormulaColumn.gif)