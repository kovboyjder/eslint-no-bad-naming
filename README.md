# eslint-plugin-no-bad-naming-variables

Ensure a proper naming convention for y

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-bad-naming-variables`:

```
$ npm install eslint-plugin-no-bad-naming-variables --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-bad-naming-variables` globally.

## Usage

Add `no-bad-naming-variables` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-bad-naming-variables"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-bad-naming-variables/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





