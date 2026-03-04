# Barcodes

Dynamic barcodes in PDF can be drawn directly as vector graphics. They look good at every zoom level and have a very small file size compared to barcodes created as raster images.

### Supported Types

**One-dimensional:**  
EAN-8, EAN-13, Code 39, Code 93

**Two-dimensional:**  
Aztec, Data Matrix, PDF417, QR code, Pay by square (SK and CZ)

### Configuration

Click on the **Barcodes 1D** or **Barcodes 2D** drop-down button in the editor's toolbar and select the required type. A configuration window will appear. Once confirmed, the barcode will be placed at the cursor's location.

**Data (expression)**

Define a simple text field name or formula using the [expression language](/_inbox/60-guides/10-expressions.md) to be evaluated and used by the barcode generation algorithm.

Examples:  
`ProductSKU` – single field expression to get product SKU and generate a barcode (e.g. EAN)  
`"https://some.service.com/?referal=" + UserId` – expression to generate a QR code with a referral URL link

**Zoom**

Adjust zoom level to 1, 2, or 3 to change the size of the generated barcode. Barcode lines or dots will be thicker at higher zoom levels.

**Size**

Select the size of the barcode. 1D barcode lines will be longer, and 2D barcode dimensions will be larger.
