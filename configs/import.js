module.exports = {
  rules: {
    // Import
    'import/named': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-amd': 'error',
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': ['error', { groups: [['builtin', 'external', 'internal']] }],
    'import/newline-after-import': 'error',
    'import/max-dependencies': ['warn', { max: 40 }],
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'test/**', // tape, common npm pattern
          'tests/**', // also common npm pattern
          'spec/**', // mocha, rspec-like pattern
          '**/__tests__/**', // jest pattern
          '**/__mocks__/**', // jest pattern
          'test.{js,jsx,ts,tsx}', // repos with a single test file
          'test-*.{js,jsx,ts,tsx}', // repos with multiple top-level test files
          '**/*{.,_}{test,spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          '**/webpack.config.ts', // webpack config
          '**/webpack.config.*.ts', // webpack config
          '**/.eslintrc.js', // eslint config
          '**/.eslintrc.ts', // eslint config
          '**/*.stories.{ts,tsx,mdx}', // eslint config
        ],
        optionalDependencies: false,
      },
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['react-datasheet/lib/react-datasheet.css', '@web/styles/global.css'],
      },
    ],
    'import/no-named-default': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': ['error', { maxDepth: '∞' }],
    'import/no-useless-path-segments': ['error', { commonjs: true }],
    // Disabled because of stories and pages files
    'import/no-unused-modules': 'error',
    'import/no-relative-packages': 'error',

    // Disabled rules
    // These import rules are either not relevant or covered by the Typescript compiler
    'import/group-exports': 'off',
    // Deprecated
    'import/dynamic-import-chunkname': 'off',
    'import/exports-last': 'off',
    'import/imports-first': 'off',
    'import/namespace': 'off',
    'import/no-namespace': 'off',
    'import/no-commonjs': 'off',
    'import/no-default-export': 'off',
    'import/no-import-module-exports': ['off', { exceptions: [] }],
    'import/no-internal-modules': ['off', { allow: [] }],
    'import/no-named-export': 'off',
    'import/no-nodejs-modules': 'off',
    'import/no-relative-parent-imports': 'off',
    'import/no-restricted-paths': 'off',
    'import/prefer-default-export': 'off',
    'import/unambiguous': 'off',
  },
};
