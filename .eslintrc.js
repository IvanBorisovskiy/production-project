module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'ulbi-tv-plugin', 'unused-imports'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'unused-imports/no-unused-imports': 'error',
        indent: [2, 4],
        'react/jsx-filename-extension': [2, {
            extensions: ['.js', '.jsx', '.tsx'],
        }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': ['error', {
            ignoreComments: true,
            code: 120,
        }],
        'arrow-body-style': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error',
        // Checks effect dependencies,
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'linebreak-style': 'off',
        'i18next/no-literal-string': 'off',
        'react/no-array-index-key': 'off',
        'react/no-unstable-nested-components': 'warn',
        'ulbi-tv-plugin/path-checker': ['error', {
            alias: '@',
        }],
        'ulbi-tv-plugin/layer-imports': ['error', {
            alias: '@',
            ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
        }],
        'ulbi-tv-plugin/public-api-imports': ['error', {
            alias: '@',
            testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
        }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    }],
};
