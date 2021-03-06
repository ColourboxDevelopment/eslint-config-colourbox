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

Create a ```.eslintrc``` in your project's root directory and add this:

```
{
    "extends": "colourbox"
}
```

# Rules

> The configuration extends AirBnb's ```eslint-config-airbnb``` ( https://github.com/airbnb/javascript) and adds our preferred configuration.

## Differences between AirBnb and this configuration

### Globals

```window``` and ```console``` are valid globals.

### ```indent: ['error', 4, {'SwitchCase': 1}]```

This rule enforces a consistent indentation style. 4 spaces.

### ```'react/forbid-prop-types': [1, { forbid: ['any'] }]```

This rule forbids the use of 'vague prop types'; ```any```, ```array```, ```object```. We encourage using ```arrayOf``` and ```shape``` instead of ```array``` and ```object```, but in some cases we want to just use ```object``` and ```array```, so we reduced the rule to only forbid the ```any``` type.

### ```'react/jsx-indent-props': [2, 'first']```

This option validates a specific indentation style for props.

### ```'react/jsx-boolean-value': 0```

This rule enforces style for boolean attributes.

Disabled, because we want to allow a more explicit syntax like `<MyComponent bool={true} />` instead of having to write `<MyComponent bool />` for the same.

### ```'react/jsx-one-expression-per-line': 0```

Disabled, allowing you to have multiple expressions, including plain text and whitespace, in 1 line.

### ```'react/jsx-indent': [2, 4]```

This rule enforces a consistent indentation style in JSX. 4 spaces.

### ```'react/jsx-curly-brace-presence': 0```

This rule controls the use of curly braces. It fails to allow `'{ }'` except when configuring the rule to ignore children completely, so we disables the rule.

It's an [issue with eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react/issues/1717), so the rule should be enabled again when updating to the next stable version of eslint-plugin-react.

### ```'import/no-unresolved': 0```

Ensures an imported module can be resolved to a module on the local filesystem.

Disabled, doesn't work properly with webpack.

### ```'class-methods-use-this': 0```

Enforce that class methods utilize ```this```

If a class method does not use ```this```, it can sometimes be made into a static function.

Disabled, because it is sometimes difficult to use ```this``` in all methods of a class.

### ```'max-len': 0```

Disables line length linting. Read more about the options at [https://eslint.org/docs/rules/max-len](https://eslint.org/docs/rules/max-len).

### ```'jsx-a11y/click-events-have-key-events': 0```

Disallows using onClick without onKey event.

Disabled. We want to be able add onClick attributes without additional events.

### ```'jsx-a11y/no-static-element-interactions': 0```

The AirBnb eslint configuration discourages adding actions to static elements, for example ```onclick``` on a ```div```, without adding ```role``` and ```tabindex```. We disabled the rule for convenience, and because we except to have very few or no visually impaired users using our stock image website.

This rule is closely related to ```jsx-a11y/no-noninteractive-element-interactions```:

### ```'jsx-a11y/no-noninteractive-element-interactions': 0```

This rule enforces using natively interactive HTML elements for interaction, for example a ```button``` for click events, and not just any element like a ```div```. The rule is closely related to the above rule and has been disabled.

### ```'jsx-a11y/media-has-caption': 0```

This rule reminds/forces developers to add tracks (captions, subtitles) to media. We do not (always) have such tracks and do not want to be forced into producing them, so we disabled the rule.

### ```'react/no-danger': 0```

Prevent usage of dangerous JSX properties.

Disabled. In some cases, we want to use it for editable content.

### ```'no-restricted-syntax': [ 'ForStatement' ]```

Disallows ```for``` loops. Full rule:

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

### ```'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }]```

Require parens in arrow function arguments.

Disabled. Require for block body or multiple parameters.

### ```'react/jsx-props-no-spreading': 0```

Disallow JSX props spreading

Disabled. In some cases, we want to use JSX props spreading.


### ```'react/jsx-curly-newline': 0```

Enforce linebreaks in curly braces in JSX attributes and expressions.

Disabled. Come on! Get a life, who cares.

