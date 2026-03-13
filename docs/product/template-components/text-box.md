---
title: Text Box
sidebar_position: 2
---

# Text Box

Basic template component enables you to put dynamic text into your document.

### Configuration

Click on **Text Box** button in editor's toolbar and a configuration window will appear. Once confirmed, the Text Box will be placed at the cursor's location.

**Data (expression)**

Define a simple text field name or formula using [expression language](../template-building-guides/expressions.md) to be evaluated and print the resulting value to a document.

Examples:  
`Surname` – single field expression to put surname in place  
`num(Amount, 0, 2) + " €"` – expression to print Amount with 2 decimal places and trailing euro sign

**Type**

Define the type of input data to be printed as text into the document:

- **Plain text** – plain text with support for new line character `\n`
- **HTML** – text with HTML markup
- **Date** – print datetime value in Date format

**Date format**

When **Type** is set to Date, the following date string is used to format the datetime value to text in the document. You can use the following letters:

- `y` = year (yy or yyyy)
- `M` = month (MM)
- `d` = day in month (dd)
- `h` = hour (0–12) (hh)
- `H` = hour (0–23) (HH)
- `m` = minute in hour (mm)
- `s` = seconds (ss)
- `S` = milliseconds (SSS)
- `z` = time zone text (e.g. Pacific Standard Time)
- `Z` = time zone, time offset (e.g. -0800)

Examples:  
`yyyy-MM-dd` → 2009-12-31  
`dd-MM-yyyy` → 31-12-2009  
`yyyy-MM-dd HH:mm:ss` → 2009-12-31 23:59:59  
`HH:mm:ss.SSS` → 23:59.59.999  
`yyyy-MM-dd HH:mm:ss.SSS` → 2009-12-31 23:59:59.999  
`yyyy-MM-dd HH:mm:ss.SSS Z` → 2009-12-31 23:59:59.999 +0100

**Example Value**

This value is displayed in the editor instead of the Data (expression). Very useful when a complex formula results in a short value and it breaks the view of the template while designing.

**Font**

Change the font size for the resulting text.

**Color**

Select the font color of the resulting text.
