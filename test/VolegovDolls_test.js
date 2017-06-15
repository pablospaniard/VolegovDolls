(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#VolegovDolls', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.VolegovDolls(), this.elems, 'should be chainable');
  });

  test('is awesome', function() {
    expect(1);
    strictEqual(this.elems.VolegovDolls().text(), 'awesome0awesome1awesome2', 'should be awesome');
  });

  module('jQuery.VolegovDolls');

  test('is awesome', function() {
    expect(2);
    strictEqual($.VolegovDolls(), 'awesome.', 'should be awesome');
    strictEqual($.VolegovDolls({punctuation: '!'}), 'awesome!', 'should be thoroughly awesome');
  });

  module(':VolegovDolls selector', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is awesome', function() {
    expect(1);
    // Use deepEqual & .get() when comparing jQuery objects.
    deepEqual(this.elems.filter(':VolegovDolls').get(), this.elems.last().get(), 'knows awesome when it sees it');
  });

}(jQuery));
