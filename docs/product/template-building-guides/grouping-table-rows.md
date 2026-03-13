---
title: Grouping Table Rows
sidebar_position: 8
---

# Grouping Table Rows
Table with grouped items can be created in Eledo using combination of nested block repetitions and UNIQUE and FILTER functions.

The idea is to find a list of unique values of a column you would like to group the items by and then using filter function find a group of rows with the same column value.

Block repetitions will be placed on Table Body container and second Table Row. Table body is used, because it can have multiple table rows inside, 2 in our case. First row will print the group label and second will be used to repeat the grouped rows.

## Preparing table
The table needs to have a specific structure to be able to use it for this use case. Eledo editor is currently creating a simplified table which needs to be updated via HTML Source in the editor.

We need to separate header and the body of the table. First row of the body may use column span. The code looks like this:

```
<table border="1" cellpadding="1" cellspacing="1" style="width: 500px;">
	<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Phone</th>
			<th>City</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="4">&nbsp;</td>
		</tr>
		<tr>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
			<td>&nbsp;</td>
		</tr>
	</tbody>
</table>
```

## Outer repetition with UNIQUE list
With table prepared by example above we can apply the Block Repetition to the table body container. Data expression with UNIQUE function will repeat the table body as many times as there are unique team values.

```
UNIQUE(items, team)
```

We will also print each value using Text Box and `$current` data expression.

![Applying Block Repetition to Table Body](/img/product/guides/UniqueListIntoBlockRepetition.gif)

## Nested repetition with FILTER
Second Block Repetition will be applied to a second table row. In data expression we will be referring to a current value of iteration of outer repetition using `$current` variable.

```
FILTER(parent.items, $current == team)
```

In the FILTER function we refer to `parent.items`, because the outer repetition has changed the context and `items` data expression would refer to items field on the child item, which does not exist.

![Applying Block Repetition to Table Body](/img/product/guides/FilterListInSecondRepetition.gif)

Resulting data structure can be checked in Input Fields menu. In our case the `team` field was resolved as Number type due to `==` operator we have used with it. We will need to manually override the default type from Number to String.

![Applying Block Repetition to Table Body](/img/product/guides/TableGroupingInputFields.png)

## Test run

When we create document from our template we should get our items grouped by a team.

![Applying Block Repetition to Table Body](/img/product/guides/TableGroupingTestRun.png)
