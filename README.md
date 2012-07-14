Underwear [![](https://secure.travis-ci.org/daytonn/underwear.png?branch=master)](http://travis-ci.org/daytonn/underwear)
=========

Underwear is a library to extend javascript built-in prototypes with the
underscore methods.

This is currently a work in progress. I've begun translating all the
QUnit tests to Jasmine specs and making all the tests pass.

[Source Documentation](http://daytonn.github.com/underwear/docs/underwear.html)

##Extended prototypes:

###Array:
 - collect
 - compact
 - detect (alias of `find`)
 - difference
 - each
 - first
 - find
 - filter
 - foldr (alias of `foldr`)
 - forEach (native if available)
 - flatten
 - indexOf (native if available)
 - initial
 - intersection
 - isEmpty
 - last
 - lastIndexOf (native if available)
 - map (native if available)
 - range (Class method: Array.range(a, b, c))
 - reduce (native if available)
 - reject
 - rest
 - tail
 - take
 - select (alias of `find`)
 - union
 - uniq
 - without
 - zip


###String
 - isEmpty

###Function:
 - functions

###Object:
 - clone
 - collect (alias of `map`)
 - defaults
 - detect (alias of `find`)
 - each
 - extend
 - find
 - filter
 - forEach
 - foldr (alias of `reduceRight`)
 - functions
 - isEmpty
 - keys
 - pick
 - reduce
 - reduceRight
 - reject
 - select (alias of `find`)
 - tap
 - map


###Number:
(not yet implemented)

##Custom prototypes

###Template:
(not yet implemented)

###UniqueID:
(not yet implemented)

##Utilities
 - isEqual
 - isEmpty
 - isArguments
 - isBoolean
 - isDate
 - isElement
 - isFunction
 - isNaN
 - isNull
 - isNumber
 - isRegExp
 - isString
 - isUndefined
 - isDefined (Underwear.js addition)