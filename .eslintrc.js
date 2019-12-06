module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/recommended', '@vue/standard', '@vue/typescript'],
  rules: {
    'no-console': 1,
    'no-debugger': 'off',
    'max-len': ['error', { code: 150, tabWidth: 4, ignoreComments: true }],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'no-constant-condition': ['error', { checkLoops: false }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
}
