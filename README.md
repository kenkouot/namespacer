
# Namespacer

    Convenient utility function for application namespacing

## Installation

    $ component install kenkouot/namespacer

## Example

```js
// Initialize to {} with argument
namespacer('app.foo.bar');

// Or do it with a string
namespacer('foo.bar', 'app');

// Or an object
var app = window.app || {};`
namespace('foo.bar', app);

// Pass in a value aka app.foo.bar = { baz: 'lur' };
namespacer('foo.bar', 'app', { baz: 'lur' });
```

## API

### namespacer(str, [string || obj], [value])

## License

  MIT
