# Printing images in line
To save some space in your document you may need to print images in line and then continue in a new line when there are more of them. This can be achieved with a DIV container and inline-block display property.

## Define custom style
You can imagine DIV container as an invisible box which wraps its content. In our case the content will be dynamic image component. By default the display property of the DIV container is **block**, which means multiple DIVs will be layed out one after another (or one per line). Our goal is to position multiple DIVs in single line and then into a new line if we run out of space. This can be achieved by changing the display property to **inline-block** like this:

```
DIV.inline-images {
    display: inline-block;
}
```

This new style class definition for DIV container goes into Styles

![Applying Block Repetition to Table Body](/assets/guides/InlineImagesDefineStyle.gif)

## Wrap dynamic image with DIV container
Steps to setup this layout is slightly reversed. We will add dynamic image first and then we will wrap it with the DIV container.

### Add dynamic image
For the image we will use **public_url** data expression to remind that URL of the image have to be publicly available from the internet, not private one. We will also remove the height definition of the dynamic image, so this second dimension is automatically calculated and our images are not stretched.

![Applying Block Repetition to Table Body](/assets/guides/InlineImagesAddDynamicImage.gif)

### Wrap image with DIV container
It can now be added easily once we have all the preparations done. Make sure your dynamic image component is selected and then click on DIV container component. It will replace the Paragraph container which is created by default in Eledo editor. Don't forget to assign style class we have created.

You can double-check the operation was successfuly by inspecting the component's path at the bottom status bar of Eledo editor. Div should be in place of P

![Applying Block Repetition to Table Body](/assets/guides/InlineImagesWrapWithDIVContainer.gif)

### Apply Block Repetition to DIV container
Last step is to apply the Block Repetition to the DIV container. This way Eledo will repeat the inline DIVs as many times as there are images in the list.

![Applying Block Repetition to Table Body](/assets/guides/InlineImagesApplyBlockRepetition.gif)

## Test run
When we create document from our template we should get a result like this

![Applying Block Repetition to Table Body](/assets/guides/InlineImagesTestRun.png)

## Improvements
In the example above we can see the images are displayed without any spacing and it doesn't look good with different heights. Let's try to set constant height and variable width and also add some spacing between the images.

We can add spacing by updating our style for the DIV container and define a margin:

```
DIV.inline-images {
    display: inline-block;
    margin: 6pt;
}
```
And set the dynamic image height to constant 100px:

![Applying Block Repetition to Table Body](/assets/guides/InlineImagesConstantHeight.png)

Now it looks much better even with more images:

![Applying Block Repetition to Table Body](/assets/guides/InlineImagesTestRun2.png)
