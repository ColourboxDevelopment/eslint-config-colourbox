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
        indent: ['error', 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 'first'],
        'react/jsx-boolean-value': 0,
        'import/no-unresolved': 0,
        'class-methods-use-this': 0,
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
        'jsx-a11y/click-events-have-key-events': 0,
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
        'import/resolver': 'webpack',
    },
};
