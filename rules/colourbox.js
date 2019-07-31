module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    globals: {
        window: true,
        console: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        indent: [2, 4, {'SwitchCase': 1}],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 'first'],
        'react/jsx-boolean-value': 0,
        'react/jsx-one-expression-per-line': 0,
        'import/no-unresolved': 0,
        'class-methods-use-this': 0,
        'max-len': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        'react/no-danger': 0,
        'no-restricted-syntax': [
            'error',
            'ForStatement',
            'ForInStatement',
            'ForOfStatement',
            'LabeledStatement',
            'WithStatement',
        ],
    },
    plugins: [
        'react',
    ],
    settings: {
        'import/resolver': {
            webpack: 'webpack.config.js',
        },
    },
};
