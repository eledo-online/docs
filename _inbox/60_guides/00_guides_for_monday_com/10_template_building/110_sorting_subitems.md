# Sorting Subitems
Order of items or subitems may be important in your document and you can sort them in your template to ensure the right order all the time. Subitems can be sorted by one or multiple columns with a priority order.

Sorting of subitems can be done using **SORT_ASC()** and **SORT_DESC()** functions in Eledo data expression. It has two parameters, the source array and sorting conditon.

## Basic Sorting by a Single Column
To sort subitems by a single column in ascending order, use SORT_ASC() with the column name as the sorting condition. For example:


`SORT_ASC(item.subitems, "date")`

To sort in descending order, use SORT_DESC():

`SORT_DESC(item.subitems, "number0")`

Sorting by Multiple Columns
For more complex requirements, you can sort subitems by multiple columns with assigned priorities. Sorting will first follow the order of the first column; if values match, it proceeds to sort by the second column and so on.

To sort by `date` first, followed by `number0`, use:

`SORT_ASC(item.subitems, "date", "number0")`

Tip: If you need to sort in different directions (e.g., one column in ascending order and another in descending), you can combine SORT_ASC() and SORT_DESC() on separate columns.


# Where to apply?

Result of SORT function is a sorted list. To print that list we use Block Repetition. How to setup the Block Repetition we describe in [Printing Subitems](/_inbox/60_guides/00_guides_for_monday_com/10_template_building/20_printing_subitems.md) guide.

We apply the sorting function in Block Repetition's data expression.

![image](/assets/guides/MondaySortingSubitems.gif)

## Practical Examples
**Sorting by Price**: To sort products by price in ascending order (from lowest to highest), use:

```
SORT_ASC(item.subitems, "number")
```
**Sorting by Date**: To sort events by date in descending order (with the latest events first), use:


```
SORT_DESC(item.subitems, "date")
```

**Sorting by Text**: To arrange items alphabetically by a text field, such as sorting names in ascending order, use:

```
SORT_ASC(item.subitems, "text1")
```