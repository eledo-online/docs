---
title: Images in a 2-Column Layout
sidebar_position: 4
---

# Images in a 2-Column Layout

Block repetition with data expression:

```
FOR(1, SIZE(item.file_mknjndsx) / 2 + 1)
```

Dynamic images with data expressions:

```
PROPERTY(GET(parent.item.file_mknjndsx, $index * 2 - 1), "public_url")
PROPERTY(GET(parent.item.file_mknjndsx, $index * 2), "public_url")
```

