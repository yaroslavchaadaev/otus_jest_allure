module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  plugins: ['jest', 'prettier', 'jasmine'],
  extends: [
    'plugin:prettier/recommended',
    'standard',
    'plugin:jasmine/recommended'
  ],
  overrides: [
    {
      env: {
        node: true,
        jest: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    reporter: true
  },
  rules: {
    "space-before-function-paren": ["error", "always"]
  }
}
