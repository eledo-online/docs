# Text Functions

## CONCAT(A, B, ...)
Concatenates multiple strings into one:

> CONCAT( "Hello", name )

> CONCAT( "INV", NUM( invoiceNumber, 4 ) )

## LENGTH(T)
Calculates length of text T

> LENGTH( name )

## LEFT(T, N)
Returns left N characters from text T

> LEFT( "PO00384", 2 )

## RIGHT(T, N)
Returns right N characters from text T

> RIGHT( "PO00384", 5 )

## UPPER(T)
Converts all text T characters to upper case

> UPPER( name )

## LOWER(T)
Converts all text T characters to lower case

> LOWER( name )

## CAPITALIZE(T)
Capitalizes a text T changing the first letter to upper case. No other letters are changed.

> CAPITALIZE( surname )

## CAPITALIZEFULLY(T)
Converts all the whitespace separated words in a text T into capitalized words, that is each word is made up of a upper case character and then a series of lowercase characters.

> CAPITALIZEFULLY( fullName )

## CHARAT(T, N)
Returns N-th character of text T

> CHARAT( name, 3 )

## SPLIT(T, S)
Splits text T with separator S into an array

> SPLIT( countries, "," )

## REGEX(T, R)
Returns first match of regex R on text T

> REGEX( invoiceNumber, "\d+" )

## REPLACE(T, A, B)
Replaces text A with text B in text T

> REPLACE( text, "Dog", "Cat" )

## CONTAINS(T, A)
Returns true if text T contains text A

> CONTAINS( text, "yes" )

## INDEXOF(T, A)
Returns index of text A in text T

> INDEXOF( text, "X" )

## SUBSTRING(T, I)
Returns subtext of text T, starting at I position

> SUBSTRING( text, 3 )

## SUBSTRING(T, I, J)
Returns subtext of text T, starting at I position and ending at J position

> SUBSTRING( text, 3, 6 )