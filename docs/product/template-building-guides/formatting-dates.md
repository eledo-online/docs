---
title: Formatting Dates
sidebar_position: 4
---

# Formatting Dates

Dates play a pivotal role in document creation, and presenting them in a clear and standardized format is essential for effective communication. Whether you're preparing reports, invoices, or any other document, the way dates are displayed can significantly impact readability and professionalism.

In this guide, we will delve into the art of date formatting using Eledo, a powerful platform that employs the DATE function with standard Java date formats.

## Understanding DATE function

The DATE function, with its two parameters, empowers users to transform raw date values into well-structured and visually appealing representations. It can be seamlessly integrated into any data expression field in your template.
```
DATE(value, date_format)
```

- `value` - The input date value.
- `date_format` - The desired format for the output date.

### Input Date Value
Source date values can be extracted from the template's Input Fields, where the input field should be of Date type. Alternatively, you can use other data expressions to obtain a `TODAY()` value or calculate a Date value from different input fields using the `TO_DATE()` function to parse dates from various formats.

### Date Format
Case sensitive pattern defines the output format of the date.

### Basic Date Formatting
The case-sensitive pattern defines the output format of the date. Here are some basic examples:

Format an `item.date input` field with "dd MM yyyy" format:
```
DATE(item.date, "dd MM yyyy")
```

Print today's date in "yyyy-MM-dd" format:
```
DATE(TODAY(), "yyyy-MM-dd")
```

## Overview of Date Format
Date Format specifies the output format of the Date value. It consists of case sensitive letters which represents parts of the date in various formatting options. Amount of letters is also important as it results in different date output value.

| Letter | Date or Time component | Examples |
|--------|------------------------|----------|
| y | Year | 2019 (yyyy), 19 (yy) |
| M | Month in year | January (MMMM), Jan (MMM), 01 (MM) |
| w | Week in year | 23 (w) |
| W | Week in month | 2 (W) |
| D | Day in year | 156 (D) |
| d | Day in month | 02 (dd), 2 (d) |
| F | Day of week in month | 5 (F) |
| E | Day name in the week | Friday (EEEE), Fri (EEE) |
| u | Day number of week where 1 represents Monday, 2 Tuesday and so on | 7 (u) |
| a | AM or PM marker | AM (a) |
| H | Hour in day (0–23) | 21 (H), 03 (HH) |
| h | Hour in day (1–12) | 11 (h), 04 (hh) |
| k | Hour in day (1–24) | 24 (k), 05 (kk) |
| K | Hour in day (0–11) | 0 (K), 01 (KK) |
| m | Minute in the hour | 5 (m), 05 (mm) |
| s | Second in the minute | 7 (s), 07 (ss) |
| S | Milliseconds in the minute | 584 (SSS) |
| z | Timezone | Pacific Standard Time; PST; GMT-08:00 |
| Z | Timezone offset in hours (RFC pattern) | -0800 |
| X | Timezone offset in ISO format | -08; -0800; -08:00 |

### Examples of date formats

- `"yyyy-MM-dd"` - 2023-02-25
- `"dd MMMM yyyy"` - 25 February 2023
- `"MM/dd/yyyy"` - 02/25/2023
- `"dd/MM/yyyy HH:mm:ss"` - 25/02/2023 13:30:00
- `"E, dd MMM yyyy HH:mm:ss z"` - Sat, 25 Feb 2023 13:30:00 CET

## Date Timezone and Locale
Timezone and Locale significantly affect the date's output format. To ensure proper formatting, set the appropriate Timezone and Locale in your Eledo Template through the Settings menu of the Eledo template editor.

## Conclusion 
Mastering date formatting not only enhances the aesthetics of your documents but also ensures consistency and clarity, making it easier for your audience to interpret and act upon the information presented.