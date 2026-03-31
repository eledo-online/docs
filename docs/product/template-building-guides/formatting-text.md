---
title: Formatting Text
sidebar_position: 3
---

# Formatting Text

When generating documents, raw values are often not enough.

For example:

- a number should look like a price  
- a name might need a prefix  
- a value might need to be combined or shortened  

Eledo allows you to format values directly inside the **Data (expression)** field.

---

## Basic idea

Instead of using just a field name:

```
Amount
```

you can transform it:

```
num(Amount, 0, 2) + " €"
```

This lets you control how values appear in the final document.

![Formatting text using expression](/img/product/templates/formatting-text-example.png)

---

## Common examples

### Add text around a value

```
"Invoice #" + invoiceNumber
```

Result:

```
Invoice #12345
```

---

### Combine multiple fields

```
name + " " + surname
```

Result:

```
John Smith
```

---

### Format numbers

```
num(Amount, 0, 2) + " €"
```

Use this when working with prices or totals.

👉 See full guide: [Formatting Numbers](./formatting-numbers.md)

---

### Format dates

Dates are handled separately using date formatting.

👉 See full guide: [Formatting Dates](./formatting-dates.md)

---

## Where to use formatting

Formatting is applied directly in:

- **Text Box → Data (expression)**

This means every Text Box controls how its value is displayed.

---

## Keep it simple

Start with:

- a simple field name  
- small adjustments (adding text, combining fields)

Avoid overly complex expressions unless necessary.

---

## Related

- Learn how formatting is applied → [Text Box](../template-components/text-box.md)
- Format numbers → [Formatting Numbers](./formatting-numbers.md)
- Format dates → [Formatting Dates](./formatting-dates.md)
- Explore all available functions → [Text Functions](../data-expressions/text-functions.md)
