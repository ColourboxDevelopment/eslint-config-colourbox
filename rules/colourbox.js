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
        'import/no-unresolved': 0,
        'class-methods-use-this': 0,
        'max-len': 0,
        'jsx-a11y/anchor-is-valid': 0,
        "jsx-a11y/click-events-have-key-events": 0,
        'no-script-url': 0,
        "react/no-danger": 0,
    },
    plugins: [
        'react',
    ],
    settings: {
        'import/resolver': 'webpack',
    },
};
