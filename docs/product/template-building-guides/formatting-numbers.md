---
title: Formatting Numbers
sidebar_position: 3
---

# Formatting Numbers

In document creation, precision in displaying numerical values is essential for conveying accurate information. Whether you're dealing with plain numbers or currency values, the way they are formatted significantly impacts readability and professionalism.

This guide explores the nuances of number formatting in Eledo, employing the NUM() function for whole numbers and the CURR() function for currencies.

## Understanding the NUM and CURR Functions

The NUM() function and CURR() function are powerful tools for transforming numerical values into well-structured and visually appealing representations. These functions can be seamlessly integrated into any data expression field in your Eledo template.

```
NUM(value, leading_zeroes, decimal_places)
```

```
CURR(value, leading_zeroes, decimal_places)
```

- `value` - The numerical value to be formatted.
- `leading_zeroes` - The number of leading zeroes in the formatted output.
- `decimal_places` - The desired number of decimal places in the output.

### Whole Number Formatting with NUM
Format a numerical value with the NUM() function, specifying the number of leading zeroes and decimal places:

```
NUM(12345, 6, 2)   // Output: 012345.00
```

### Currency Formatting with CURR
Similarly, for currency values, use the CURR() function to achieve the desired formatting:

```
CURR(56789.99, 0, 3)   // Output: 56,789.990
```

## Examples of Number Formatting
Explore various examples of number formatting to suit your specific needs:

- Whole Number with Leading Zeroes and Decimal Places:
```
NUM(987, 4, 1)   // Output: 0987.0
NUM(987, 6, 0)   // Output: 000987
NUM(987, 0, 3)   // Output: 987.000
```
- Currency Value with Leading Zeroes and Decimal Places:
```
CURR(1234.56, 0, 2)   // Output: $1,234.56
CURR(1234.56, 6, 2)   // Output: $001,234.56
CURR(1234.56, 6, 0)   // Output: $001,234
```
## Thousands and Decimal separators
Thousands and Decimal separators are affected by template's Locale and to get your numbers formatted properly, you will need to set a proper Locale in your Eledo Template. You can set it up in Settings menu of Eledo template editor.

## Rounding
Number formatting functions does not round the number if they have more decimal places than displayed. To properly round the numbers you will need to use `ROUND()` function:
```
CURR(ROUND(1234.567, 2), 0, 2)   // Output: 1234.57
```

## Best Practices
Consider the following best practices for effective number formatting:

- Ensure consistency in formatting across your documents.
- Take into account any specific guidelines or regulations governing number presentation.

## Conclusion
Mastering number formatting in Eledo enhances the clarity and professionalism of your documents. Whether dealing with whole numbers or currencies, utilizing the NUM() and CURR() functions empowers you to tailor your numerical data to meet the highest standards. This not only improves the visual appeal of your documents but also facilitates better comprehension for your audience.