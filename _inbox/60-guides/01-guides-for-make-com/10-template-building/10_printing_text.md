# Printing Text

To print a text value into your PDF using Make.com, follow these steps:
- In Eledo editor click on a **Text box** component from top toolbar. Configuration window will appear. 
- Click into **Data (expression)** field to open Data Expression builder.
- Type a word you want to represent the text value. It will be used as input field name. This word cannot contain a space nor special characters, just letters, numbers and underscore. In our case we type **ProductName**.
- If you need to format this value, try one of our [text formatting functions](/_inbox/40_data_expressions/30_text_functions.md)
- Confirm twice and dynamic text component will be placed at cursor position.
- Save the template and input field will be automatically created from the data expression.


![image](/assets/guides/TextPrintingMake1.gif)

- In your make.com scenario click on Eledo module and refresh Custom Fields for the template.
- **ProductName** input field should be now available to be mapped with a text value.
- Click into ProductName field and choose one from your data source to map the value.
- Confirm and you're done!

![image](/assets/guides/TextPrintingMake2.gif)
