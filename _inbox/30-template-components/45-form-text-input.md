# Form Text Input

This component enables you to add an interactive text input field with a prefilled value into your PDF document.

### Configuration

Click on the **Form** dropdown and select the **Text field** item in the editor's toolbar. A configuration window will appear. Once confirmed, the Form Text field will be placed at the cursor's location.

**Name**

Technical name for the field in the PDF Form document. It should be unique within the document.

**Data (expression)**

Define a simple text field name or formula using the [expression language](/_inbox/60-guides/10-expressions.md) to be evaluated and printed into the document.

Examples:  
`Surname` – single field expression to put the surname in place  
`num(Amount, 0, 2) + " €"` – expression to print the `Amount` with 2 decimal places and a trailing euro sign

**Size**

Number specifying the size (width) of the input box. The default value is **20**.
