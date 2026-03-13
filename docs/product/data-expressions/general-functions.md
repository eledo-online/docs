---
title: General Functions
sidebar_position: 3
---

# General Functions
## IF(C, A, B)
If logical condition C is true, result is A, otherwise B:

```
IF( price > 50, "Too high", "Acceptable" )
```

## SWITCH(R, A, X, ..)
If value A equals reference value R then return X. Switch may contain multiple A-X pairs to switch to multiple values:

```
SWITCH( number, 0, "Zero", 1, "One", 2, "Two", 3, "Three" )
SWITCH( number % 2, 0, "Number is even", 1, "Number is odd" )
```

## FOR(F, T, [S])
Creates an array with number values starting with F value, following with next values increased by step S until they are less than or equal to T. Step is optional and a default value is 1.

```
FOR( 0, 5 )
FOR( 1, count, 1 )
```

## NEXTCOUNTER(C)
Returns next counter value for counter C

```
NEXTCOUNTER( "ticketNumber" )
```

## PROPERTY(O, P)
Returns P property of object O:

```
PROPERTY( address, "street" )
```

## DEFAULT(V, D)
If value V is empty, return default value D

```
DEFAULT( number, 0 )
DEFAULT( status, "Unknown" )
```

## PHONE_COUNTRY_CODE(P)
Prints country code from a parsed phone number P

```
PHONE_COUNTRY_CODE( phone )
```

## PHONE_NATIONAL_NUMBER(P)
Prints national number from a parsed phone number P

```
PHONE_NATIONAL_NUMBER( phone )
```
