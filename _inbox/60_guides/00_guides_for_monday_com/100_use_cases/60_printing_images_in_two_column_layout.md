# Images in 2 column layout

block repetitin with data expression

FOR(1, SIZE(item.file_mknjndsx) / 2 + 1)

dynamic images with data expressions:

PROPERTY(GET(parent.item.file_mknjndsx, $index * 2 - 1), "public_url")

PROPERTY(GET(parent.item.file_mknjndsx, $index * 2), "public_url")