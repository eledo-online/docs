---
title: Text Box
sidebar_position: 2
---

# Text Box

A **Text Box** allows you to insert dynamic values into your document — such as a name, price, or date.

Instead of writing static text, you define what value should appear when the document is generated.

![Text Box Configuration](/img/product/templates/text-box-configuration.png)

---

## Add a Text Box

To insert a Text Box into your document:

1. Open your template in the editor  
2. Place the cursor where you want the text to appear  
3. Click the **TXT** button in the toolbar  
4. The configuration window will open  
5. Confirm to insert the Text Box into the document

The Text Box will be placed at the cursor position.

![Text Box Toolbar](/img/product/templates/text-box-toolbar.png)

---

## How it works

Each Text Box is connected to a value using the **Data (expression)** field.

This value becomes available when generating the document through integrations (Make, Zapier, API, etc.).

For example:

```
Surname
```

prints a value provided at runtime.

```
num(Amount, 0, 2) + " €"
```

formats a number and adds a currency.

You don’t need to fully understand expressions to get started — a simple field name is enough.

---

## Display types

A Text Box can display values in different ways depending on the selected **Type**.

### Plain Text

The default option.

- Displays simple text values
- Supports line breaks using \n

Use this for most cases — names, labels, addresses, notes.

---

### HTML

Allows you to render formatted content using HTML.

Use this if you need styling inside the value itself (for example bold text or colored text).

---

### Date

Formats a date value into a readable format.

This option is used when your input contains a date (for example: invoice date, birth date).

---

## Date formatting

When **Type = Date**, you can control how the date is displayed using a format pattern.

Eledo uses standard **Java date formatting patterns**.

Instead of memorizing all options, refer to:

https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html

Common examples:

```
yyyy-MM-dd
dd.MM.yyyy
yyyy-MM-dd HH:mm:ss
```

---

## Example value (design-time only)

The **Example Value** is shown only inside the editor.

It does **not affect the final output**.

Use it when:

- your expression is long or unreadable  
- you want to preview layout with realistic data  

Example:

Instead of seeing:

```
num(Amount, 0, 2) + " €"
```

you can display:

```
1,250.00 €
```

---

## Styling

You can adjust the appearance of the text:

- **Font** → controls font size  
- **Color** → controls text color  

These settings affect how the value is displayed in the final document.

---

## When to use Text Box

Use a Text Box whenever you need:

- dynamic text (name, address, label)
- formatted values (numbers, currency)
- dates
- calculated output

---

## Next steps

- Learn how expressions work → [Expressions](../template-building-guides/expressions.md)
- Learn how to format values → [Formatting Text](../template-building-guides/formatting-text.md)
