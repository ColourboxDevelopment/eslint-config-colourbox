# eslint-config-colourbox
This package provides Colourbox's .eslintrc as an extensible shared config.
> Based on eslint-config-airbnb

[![NPM](https://img.shields.io/npm/v/eslint-config-colourbox.svg)](https://www.npmjs.com/package/eslint-config-colourbox)

# Usage

## Install

```
npm install --save-dev eslint-config-colourbox
```

## Configure

Creact ```.eslintrc``` in your project's root directory and set the content

```
{
    "extends": "colourbox"
}

```

# Rules

> Rules are base on eslint-config-airbnb with some changes.
Basic rules: https://github.com/airbnb/javascript

## Changes

### Globals

```window``` and ```console``` are valid globals.

### ```indent: ['error', 4],```
This rule enforces a consistent indentation style. 4 spaces.

### ```'react/jsx-indent-props': [2, 'first'],```
This option validates a specific indentation style for props.

### ```'react/jsx-boolean-value': 0,```

This rule enforces style for boolean attributes.

Disabled, because we want to allow a more explicit syntax like `<MyComponent bool={true} />` instead of having to write `<MyComponent bool />` for the same.

### ```'react/jsx-indent': [2, 4],```
This rule enforces a consistent indentation style in JSX. 4 spaces.

### ```'import/no-unresolved': 0,```
Ensures an imported module can be resolved to a module on the local filesystem.

Disabled, doesn't work properly with webpack.

### ```'class-methods-use-this': 0,```
Enforce that class methods utilize ```this```
If a class method does not use this, it can sometimes be made into a static function.

Disabled, makes difficult to use ```this``` in all methods of a class.

### ```'max-len'```

```
'max-len': [
    'error',
    {
        code: 120,
        tabWidth: 4,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
    },
],
```

Sets the max line length to 120. Read more about the options at [https://eslint.org/docs/rules/max-len](https://eslint.org/docs/rules/max-len).

### ```'jsx-a11y/click-events-have-key-events': 0,```

Disallows using onClick without onKey event.

Disabled. We want to be able add onClick attributes without additional events.

### ```'react/no-danger': 0,'```

Prevent usage of dangerous JSX properties.

Disabled. In some cases, we want to use it for editable content.

### ```'no-restricted-syntax': [ 'ForStatement' ]```

Disallows for loops. Full rule:

```
'no-restricted-syntax': [
    'error',
    'ForStatement',
    'ForInStatement',
    'ForOfStatement',
    'LabeledStatement',
    'WithStatement',
],
```
