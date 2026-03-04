# QR code with link to Item
Many documents may cause a chaos when trying to identify the monday.com Item it was created from. There is an easy solution to this by labeling the documents with QR or Bar codes.

Add a QR code component to your Eledo template. Then you can build up a full URL to your item using data expression and IDs of a current board and item.

The URL should contain your monday.com domain, make sure you replace 'my-company' in the data expression with your company's domain.

Then the data expression for your QR code link should look like this:

```
CONCAT("https://my-company.monday.com/boards/", id, "/pulses/", item.id)
```
