---
title: Formatting Numbers
sidebar_position: 4
---

# Formatting Numbers

You can control how numbers appear in your document — for example adding decimal places, leading zeroes, or formatting currency values.

Eledo provides two functions for number formatting:

- `NUM()` — for general numbers  
- `CURR()` — for currency values  

---

## Using NUM and CURR

Both functions follow the same structure:

```
NUM(value, leading_zeroes, decimal_places)
CURR(value, leading_zeroes, decimal_places)
```

- `value` — the number to format  
- `leading_zeroes` — minimum number of digits (pads with zeroes if needed)  
- `decimal_places` — number of digits after the decimal point  

---

## Choosing NUM vs CURR

- Use `NUM()` for general numeric values (counts, IDs, measurements)  
- Use `CURR()` for monetary values — it applies currency formatting based on your template Locale  

---

## Common Examples

### Basic number formatting

```
NUM(987, 4, 1)   → 0987.0
NUM(987, 6, 0)   → 000987
NUM(987, 0, 3)   → 987.000
```

---

### Currency formatting

```
CURR(1234.56, 0, 2)   → $1,234.56
CURR(1234.56, 6, 2)   → $001,234.56
CURR(1234.56, 6, 0)   → $001,234
```

---

## Locale and separators

Number formatting depends on your template **Locale**.

The Locale controls:

- thousands separator  
- decimal separator  
- currency symbol  

For example:

- `1,234.56` (US format)  
- `1 234,56` (European format)  

To ensure correct formatting, set the appropriate Locale in your template settings.

---

## Rounding

Formatting functions do not automatically round values.

If a number has more decimal places than displayed, it will be truncated.

To round a number, use the `ROUND()` function:

```
CURR(ROUND(1234.567, 2), 0, 2)   → 1234.57
```

---

## Additional examples

### Whole number with leading zeroes

```
NUM(12345, 6, 2)   → 012345.00
```

---

### Currency with custom precision

```
CURR(56789.99, 0, 3)   → 56,789.990
```

---

## Best practices

- Keep formatting consistent across your document  
- Use Locale settings instead of hardcoding separators  
- Keep expressions simple and readable  

---

## Related

- See [**Printing Text**](./printing-text.md) for combining numbers with text
- See [**Formatting Dates**](./formatting-dates.md) for date formatting  

---
