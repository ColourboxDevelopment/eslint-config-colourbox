module.exports = {
    extends: [
        'eslint-config-airbnb',
        './rules/colourbox',
    ].map(require.resolve),
    rules: {},
};
