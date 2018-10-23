# @odyzeo/pluralize

Pluralize word.

## Install

```
$ npm install @odyzeo/pluralize
```

or 

```
$ yarn add @odyzeo/pluralize
```

## Usage

```js
import pluralize from '@odyzeo/pluralize'

pluralize(1, 'mačka', 'mačky', 'mačiek');
//=> "mačka"

pluralize(2, 'mačka', 'mačky', 'mačiek');
//=> "mačky"

pluralize(10, 'mačka', 'mačky', 'mačiek');
//=> "mačiek"

pluralize(10, 'mačka');
//=> undefined
```

## License

MIT
