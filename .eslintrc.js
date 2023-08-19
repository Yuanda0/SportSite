module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'jsx-a11y', 'import', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {

    'no-console': 'warn',
    'no-unused-vars': 'warn', 
    'no-undef': 'error', 

    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off', 
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }], 
    'react/prop-types': 'off', 
    'react/display-name': 'off', 
    'react-hooks/rules-of-hooks': 'error', 
    'react-hooks/exhaustive-deps': 'warn', 
  },
};