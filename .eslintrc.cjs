module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  settings: {
    react: {
      version: 'detect', // or specify your React version here, e.g., "17.0.2"
    },
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  ignorePatterns: [
    '__test__/**/*',
    '.eslintrc.cjs',
    'jest.config.ts',
    'vite.config.ts',
    'mocks/**/*',
  ],
};
