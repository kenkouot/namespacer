/*global require:true */
var namespacer = require('../lib/namespacer.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['namespacer-test'] = {
  setUp: function(done) {
    // setup here
    window = {};
    this.testObj = {
      baz: 'lur'
    };
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    test.throws(function() {
        namespacer();
    }, Error, 'Please specify a period separated list of property names');
    test.done();
  },
  'namespace undefined': function(test) {
    test.expect(2);
    test.ok(typeof namespacer('app.foo.bar', undefined, this.testObj) === 'object', 'should be an object');
    test.ok(typeof window.app === 'object', 'should be an object');
    test.done();
  },
  'namespace string defined': function(test) {
    namespacer('foo.bar', 'app', this.testObj);
    test.expect(2);
    test.ok(typeof window.app.foo.bar === 'object', 'should be an object');
    test.equal(window.app.foo.bar.baz, 'lur', 'baz should equal lur');
    test.done();
  },
  'check for properties': function(test) {
    namespacer('foo.bar', 'app', this.testObj);
    test.expect(4);
    test.ok(window.app.hasOwnProperty('foo'), 'should have app property');

    var foo = window.app.foo;
    test.ok(foo.hasOwnProperty('bar'), 'should have "bar" property');
    test.ok(foo.bar.hasOwnProperty('baz'), 'should have "baz" property');
    test.equal(foo.bar.baz, 'lur', 'foo.bar.baz should ==== "lur"');

    test.done();
  },
  'multiple namespaces': function(test) {
    namespacer('app.one.apple');
    namespacer('two.orange', 'app');
    test.expect(3);
    test.ok(window.app.one.hasOwnProperty('apple'), 'should have apple');
    test.ok(window.app.two.hasOwnProperty('orange'), 'should have apple');
    test.throws(function(){
      namespacer('app', undefined, {three: { pear: {}}});
    }, Error, 'Uneccessary assignment, please specify more items in arg1 or a namespace in arg2');
    test.done();
  }
};
