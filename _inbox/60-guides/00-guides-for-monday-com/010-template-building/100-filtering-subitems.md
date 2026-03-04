# Filtering Subitems
Sometimes you don't want to print all subitems from your board, but limit the list by some logic. Filtering allows you to do it with simple  but also complex filtering condition.

Filtering of any kind of list of items can be done using [FILTER](/_inbox/40_data_expressions/60_array_functions.md) function in Eledo data expression. It has two parameters, the source array and filtering conditon. Condition can be comparison of a single column value and a constant, but also combined using [OR and AND](/_inbox/40_data_expressions/70_logical_functions.md) functions.

# Filtering condition

Most important part of the filtering is the condition. We can build it easily by comparing the item's column with a constant. Condition is evaluated on the list's item and therefore we refer the column name without any prefx.

## Filtering by text column

To compare text column with a static text we use == operator. For example:

`FILTER(item.subitems, text1 == "Orange")`

We can compare one column against multiple values by combining multiple comparisons with logical function:

`FILTER(item.subitems, OR(text1 == "Orange", text1 == "Apple"))`

## Filtering by number column

To compare number column with a constant we use one of the operators: >, <, >=, <=, ==, !=

`FILTER(item.subitems, number0 > 100)`

We can combine multiple conditions to check whether the number is in range:

`FILTER(item.subitems, AND(number0 > 100, number0 <= 1000))`

# Where to apply?

Result of FILTER function is a filtered list. To print that list we use Block Repetition. How to setup the Block Repetition we describe in [Printing Subitems](/_inbox/60_guides/00_guides_for_monday_com/010_template_building/020_printing_subitems.md) guide.

We apply the filtering function in Block Repetition's data expression.

![image](/assets/guides/MondayFilteringSubitems.gif)
