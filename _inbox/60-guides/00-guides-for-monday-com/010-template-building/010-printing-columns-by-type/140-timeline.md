# Printing Timeline Column

To print a value ​​from a Timeline Column from your monday.com board, follow these steps:  
- In Eledo editor click on a **Text box** component from top toolbar. Configuration window will appear. 
- Click into **URL (expression)** field to open Data Expression builder.
- Find and select a timeline column using the Fields navigation menu. Start with the **item** and continue with **timeline**, **from** for example.
- If you need to format this value, try one of our [DATE functions](/_inbox/60-guides/12-formatting-dates.md)
- Confirm twice and you're done! Dynamic link component will be placed at cursor position.

![image](/assets/guides/PrintingMondayTimelineColumn.gif)

### Formatting Timeline:

**Date Format**

Format the date value into a specific date format with DATE function. Date format consists of case sensitive letters with various meanings. This function depends on Timezone and Locale setting of your template.

`DATE(value, date_format)`

*Example:*

item.timeline.from = 14. July 2025

`DATE(item.timeline.from, "MM/dd/yyyy")`   Output: 07/14/2025

`DATE(item.timeline.to, "dd/MM/yyyy")`   Output: 14/07/2025

`DATE(item.timeline.changed_at, "EEEE, MMMM d, yyyy")`   Output: Monday, July 14, 2025

`DATE(item.timeline.from, "dd MMMM yyyy")`   Output: 14 July 2025

Date formatting letters are listed in this article: [Formatting Dates](/_inbox/60-guides/12-formatting-dates.md)

Find more information about data formatting in this article: [Formatting Dates](/_inbox/60-guides/12-formatting-dates.md) 

Discover all date functions here: [Date Functions](/_inbox/40-data-expressions/50-date-functions.md)