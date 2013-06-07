var hexer = require('../index')
var assert = require('assert')

describe('hexidecimal-sort', function() {
  it('throws an error when you give it non hex values', function() {
    assert.throws(function(){
      hexer(null)
    })
    assert.throws(function(){
      hexer('nope', 'f')
    })
    assert.throws(function(){
      hexer('0xfff', '0x')
    })
  })
  it('compares hex values that start with `0x`', function() {
    assert.equal(hexer('0xfff', '0xccc'), 1)
    assert.equal(hexer('0x51b0efbc995c95091c000104', '0x51b0efbc995c95091c00010e'), -1)
  })
  it('compares mixed hex values', function() {
    assert.equal(hexer('fff', '0xccc'), 1)
  })
  it('compares hex values of different sixes', function() {
    assert.equal(hexer('fff', 'cccccc'), -1)
  })
  it('compares really big hex values', function() {
    assert.equal(hexer('51b0efbc995c95091c000104', '51b0efbc995c95091c00010e'), -1)
  })
  it('returns 0 when values are the same', function() {
    assert.equal(hexer('51b0efbc995c95091c000104', '51b0efbc995c95091c000104'), 0)
  })
})
