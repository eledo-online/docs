---
title: Dynamic File Name
sidebar_position: 6
---

# Dynamic File Name

Like other dynamic components, also the File Name of your document can be defined using data expression.

By default the File Name is the same as your template name. You can change it in your template's Settings. Usually the file name consists of a static text and name of a person, number of a document etc.

![Creating 3 row table for header and footer concept](/img/product/guides/FileName.gif)

## Examples
Few examples to get an idea

### Invoice number with leading zeroes

```
CONCAT("Invoice_INV", num(invoiceNumber, 6))
```

This will create the file name like **Invoice_INV002031**

### File Name with today's date

```
CONCAT("Report_", date(today(), "yyyy-MM-dd"))
```

This will create the file name like **Report_2022-02-01**