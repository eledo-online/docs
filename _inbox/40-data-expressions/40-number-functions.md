# Number Functions
## ABS(A)
Absolute value of number A

> ABS( quantity )

## MAX(A, B, ...)
Maximum value of values A, B, ...

> MAX( price1, price2, price3 )

## MIN(A, B, ...)
Minimum value of values A, B, ...

> MIN( price1, price2, price3 )

## NUM(N, D)
Print number N with D digits, pad with leading zeroes

> NUM( index, 4 )

## NUM(N, D, P)
Print number N with D digits and P decimal places, pad with leading and trailing zeroes

> NUM( quantity, 0, 2 )

## CURR(N, D)
Print currency N with D digits, pad with leading zeroes

> CURR( quantity, 4 )

## CURR(N, D, P)
Print currency N with D digits and P decimal places, pad with leading and trailing zeroes

> CURR( price, 0, 2 )

## TO_NUMBER(T)
Converts text T to number

> TO_NUMBER( text )

## ROUND(D, S)
Rounds decimal number D with S scale, rounding half up

> ROUND( quantity * price, 2 )

## ROUNDUP(D, S)
Rounds decimal number D with S scale, rounding up

> ROUNDUP( quantity * price, 2 )

## ROUNDDOWN(D, S)
Rounds decimal number D with S scale, rounding down

> ROUNDDOWN( quantity * price, 2 )

## CEILING(D)
Rounds decimal number D towards positive infinity. If the number is positive, behaves as rounding UP. If the number is negative, behaves as rounding DOWN.

> CEILING( number )

## FLOOR(D)
Rounds decimal number D towards 'nearest neighbor'. 

> FLOOR( number )

## PMT(R, M, PV, [FV, [T]])
Calculates the payment for a loan based on constant payments and a constant interest rate. R - rate, M - number of periods, PV - present value, FV - future value, T - type (true=PMT at beginning of period, false=PMT at end of period)

> PMT( rate, 12, 1000 )