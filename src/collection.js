//### each
// Iterates over a list of elements, yielding each in turn to an iterator function. The iterator is bound to the context object, if one is passed. Each invocation of iterator is called with three arguments: (element, index, list). If list is a JavaScript object, iterator's arguments will be (value, key, list). Delegates to the native forEach function if it exists.
if (typeof Array.prototype.each === "undefined") {
    Array.prototype.each = function() {
        var args = argsWithThis.call(this, arguments);
        return _.each.apply(this, args);
    };
}

if (typeof Object.prototype.each === "undefined") {
    Object.prototype.each = function() {
        var args = argsWithThis.call(this, arguments);
        return _.each.apply(this, args);
    };
}

if (typeof Object.prototype.forEach === "undefined") {
    Object.prototype.forEach = Object.prototype.each;
}

//### map, collect
// Produces a new array of values by mapping each value in list through a transformation function (iterator). If the native map method exists, it will be used instead. If list is a JavaScript object, iterator's arguments will be (value, key, list).
if (typeof Object.prototype.map === "undefined") {
    Object.prototype.map = function() {
        var args = argsWithThis.call(this, arguments);
        return _.map.apply(this, args);
    };
}

if (typeof HTMLCollection.prototype.map === "undefined") {
    HTMLCollection.prototype.map = function() {
        var args = argsWithThis.call(this, arguments);
        return _.map.apply(this, args);
    };
}

if (typeof Object.prototype.collect === "undefined") {
    Object.prototype.collect = Object.prototype.map;
}

//### reduce, inject
// Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iterator.
if (typeof Object.prototype.reduce === "undefined") {
    Object.prototype.reduce = function() {
        var args = argsWithThis.call(this, arguments);
        return _.reduce.apply(this, args);
    };
}

if (typeof Object.prototype.inject === "undefined") {
    Object.prototype.inject = Object.prototype.reduce;
}

//### reduceRight, foldr
// The right-associative version of reduce. Delegates to the JavaScript 1.8 version of reduceRight, if it exists. Foldr is not as useful in JavaScript as it would be in a language with lazy evaluation.
if (typeof Object.prototype.reduceRight === "undefined") {
    Object.prototype.reduceRight = function() {
        var args = argsWithThis.call(this, arguments);
        return _.reduceRight.apply(this, args);
    };
}

if (typeof Object.prototype.foldr === "undefined") {
    Object.prototype.foldr = Object.prototype.reduceRight;
}