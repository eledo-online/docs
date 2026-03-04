# Page margins, borders and padding
Spacing around Page content consists of margins, borders and padding. Those are wrapped around the content of every page and creates desired look of your document. Blank space is divided into margin and padding which allows you to control the position of the border.

If the margin is zero, then the border will be right on the page border, and if the padding is zero, then it will be on the content border.

It is also possible to set margin, border and padding to zero and in this case your page content will cover whole document page.

## Changing margins, borders and padding
Margins, borders and padding can be changed in CSS Style editor. Click Style button in upper right corner of Main document or Background document. This opens a free text editor, where you can type CSS style.

![Switching Eledo editor to Style editor](/assets/guides/Editor_Switch_To_Style.gif)

Every new document will have a basic style defined for BODY element. Padding is defaulted to 32pt of white space around document content. Borders and margins are zero. This can be customized however it is necessary.

To remove the spacing completely, simply set all of the componnents to zero:

```
body {
    color: black;
    background-color: white;
    font-size: 16pt;
    font-family: Liberation Sans;
    margin: 0;
    border: 0;
    padding: 0;
}
```
