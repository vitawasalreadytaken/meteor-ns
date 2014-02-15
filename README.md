meteor-ns
=========

Super simple namespacing helper, packaged for Meteor. Provides a single global function `NS` that returns a reference to an arbitrarily nested "namespace". For example,
```js
var collections = NS('lib.models.collections');
```
sets a reference to `window.lib.models.collections`. This object is guaranteed to exist: if any of the `window.lib`, `window.lib.models` or `window.lib.models.collections` namespaces don't exist they will be initialized to `{}`.

## Typical usage
The following examples use CoffeeScript.

### 1. Namespacing the contents of a file
```coffee
ns = @NS 'lib.models'

class ns.BaseModelManager
	constructor: () -> ...

...

class ns.BaseModelInstance
	...

ns.getModel = () -> ...
```
The global namespace will contain `lib.models.BaseModelManager`, `lib.models.BaseModelInstance` and `lib.models.getModel`.

### 2. Importing objects from other namespaces
```coffee
models = @NS 'lib.models'
format = @NS 'lib.format'

console.log format.currency 123.4
accountModel = models.getModel 'Accounts'
```
