module.exports = {
  extends: [
    '@open-wc/eslint-config',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': [2, 'never'],
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-member-accessibility': 0
  },
  overrides: [
    {
      files: [
        '*.test.ts',
        '*.test.js',
        '*.stories.ts',
        '*.snippet.ts',
        '*.config.js',
        '*.conf.js',
        'playroom.entry.ts',
        'storybook.ts'
      ],
      rules: {
        // devDependencies are all in the root
        'import/no-extraneous-dependencies': 0
      }
    },
    {
      files: ['*.test.js'],
      rules: {
        'import/no-unresolved': 0
      }
    },
    {
      files: ['*.config.js', '*.conf.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0
      }
    }
  ]
};
