!function (name, definition) {
  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()
}('hexadecimal-sort', function () {

  var hexer = function(a, b) {
    var ax = parseInt(a,16)
    if (isNaN(ax)) throw "First value is not a hexidecimal number"

    var bx = parseInt(b,16)
    if (isNaN(bx)) throw "Second value is not a hexidecimal number"

    // easiest check
    if (ax < bx) return -1
    if (ax > bx) return  1

    // If it's a really big hexadecimal number, such as a BSON ID,
    // then parsing it creates the largest number javascript can handle: 2.5282188864409287e+28
    // If they're both valid hex values, but both convert to that number, then a check on string length will be enough
    if (typeof a == 'string' && typeof b == 'string') {
      if (a.length < b.length) return -1
      if (a.length > b.length) return  1
    }

    // otherwise, look through each character and figure out what's going on
    var x, y, i, l
    for (i = 0, l = a.length; i < l; i+=1) {
      x = parseInt(a[i], 16)
      y = parseInt(b[i], 16)
      if (x < y) return -1
      if (x > y) return  1
    }

    return 0
  }

  return hexer

})
