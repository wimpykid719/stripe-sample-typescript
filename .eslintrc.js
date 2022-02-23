module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', , 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  root: true,
  rules: {
    // "quotes": ["error", "double"]
    'no-console': 'off',
    // reactが定義される前に使用されてるという警告を消している。
    'no-use-before-define': 'off',
    // 'react/button-has-type': 'off',

    // どこからも参照されてない奴を指摘するのをoffにする設定だった気がする。
    // 'import/no-unresolved': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
  },
}
