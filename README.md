# Namespacer

    Convenient utility function for application namespacing

## Installation

    $ component install kenkouot/namespacer

## Example

```js
// Initialize to {} with a single argument
namespacer('app.foo.bar');

// Or explicitly declare your namespaces separately as the second argument
namespacer('foo.bar', 'app');

// Or an instantiated object
var app = window.app || {};
namespacer('foo.bar', app);

// Pass in a value aka app.foo.bar = { baz: 'lur' };
namespacer('foo.bar', 'app', { baz: 'lur' });
```

## API

### namespacer(str, [string || obj], [value])

## License

  MIT
