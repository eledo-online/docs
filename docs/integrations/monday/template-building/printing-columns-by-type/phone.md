---
title: Phone Column
sidebar_position: 10
---

# Printing Phone Column

To print a value ​​from a Phone Column from your monday.com board, follow these steps:  
- In Eledo editor click on a **Dynamic Image** component from top toolbar. Configuration window will appear. 
- Click into **Data (expression)** field to open Data Expression builder.
- Find and select a phone column using the Fields navigation menu. Start with the **item** and continue with **phone**.
- Confirm twice and you're done! Dynamic image component will be placed at cursor position.

![image](/img/integrations/monday/PrintingMondayPhoneColumn.gif)

## National format
You can format your phone number into National format using our PHONE_FORMAT_NATIONAL function:

`PHONE_FORMAT_NATIONAL(item.phone)`

## International format
For international phone format use PHONE_FORMAT_INTERNATIONAL function:

`PHONE_FORMAT_INTERNATIONAL(item.phone)`

Phone formatting functions relies on Locale setting of your Eledo template. To get these functions work properly make sure your Locale selection contains language and country as well, e.g. `en_US`
