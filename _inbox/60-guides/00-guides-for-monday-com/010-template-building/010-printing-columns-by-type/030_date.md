# Printing Date Column

To print a value ​​from a Date Column from your monday.com board, follow these steps:  
- In Eledo editor click on a **Text box** component from top toolbar. Configuration window will appear. 
- Click into **Data (expression)** field to open Data Expression builder.
- Find and select a date column using the Fields navigation menu. Start with the **item** and continue with **date** for example.
- If you need to format this value, try one of our [DATE functions](/_inbox/60_guides/12_formatting_dates.md)
- Confirm twice and you're done! Dynamic text component will be placed at cursor position.

![image](/assets/guides/MondayPrintDateColumn.gif)

### Formatting Dates:

**Date Format**

Format the date value into a specific date format with DATE function. Date format consists of case sensitive letters with various meanings. This function depends on Timezone and Locale setting of your template.

`DATE(value, date_format)`

*Example:*

item.date = 14. July 2025

`DATE(item.date, "MM/dd/yyyy")`   Output: 07/14/2025

`DATE(item.date, "dd/MM/yyyy")`   Output: 14/07/2025

`DATE(item.date, "EEEE, MMMM d, yyyy")`   Output: Monday, July 14, 2025

`DATE(item.date, "dd MMMM yyyy")`   Output: 14 July 2025

Date formatting letters are listed in this article: [Formatting Dates](/_inbox/60_guides/12_formatting_dates.md)

**Tips:**

TODAY() = Prints today's date

`DATE(TODAY(), "yyyy-MM-dd")`

item.date = 1. January 2025 ;  item.date_1 = 20. January 2025

`DAYS_BETWEEN(item.date, item.date_1)` Output: 19

Find more information about data formatting in this article: [Formatting Dates](/_inbox/60_guides/12_formatting_dates.md) 

Discover all date functions here: [Date Functions](/_inbox/40_data_expressions/50_date_functions.md) 
