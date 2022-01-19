module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['import', 'jsx-a11y', 'react'],
  rules: {
    curly: 'error',
    'default-case': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    // TODO: Turn import/no-unresolved back on once webpack is configured.
    // See https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
    // and https://github.com/import-js/eslint-plugin-import/blob/main/README.md#resolvers for details.
    'import/no-unresolved': 'off',
    'no-duplicate-imports': 'error',
    'no-implicit-globals': 'error',
    'no-magic-numbers': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': ['error', {enforceForJSX: true}],
    'no-unused-vars': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
    ],
    'prefer-object-spread': 'error',
    'prefer-spread': 'error',
    'react/button-has-type': 'error',
    'react/default-props-match-prop-types': 'error',
    'react/function-component-definition': [
      'error',
      {namedComponents: ['function-declaration', 'arrow-function']},
    ],
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-invalid-html-attribute': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unsafe': 'error',
    'react/no-unstable-nested-components': 'error',
    'react/no-unused-prop-types': 'error',
    'react/require-default-props': 'error',
    'react/sort-comp': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'never', children: 'never'},
    ],
    'react/jsx-curly-newline': ['error', 'consistent'],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-pascal-case': 'error',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-tag-spacing': 'error',
    'sort-imports': 'error',
    'sort-keys': 'error',
    'spaced-comment': ['error', 'always', {block: {balanced: true}}],
    strict: 'error',
    yoda: 'error',
  },
  settings: {
    react: {version: 'detect'},
  },
};
