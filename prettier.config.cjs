/** @typedef {import('@ianvs/prettier-plugin-sort-imports').PluginConfig} SortImportsConfig */
/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig | SortImportsConfig} */
const config = {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    plugins: [
        '@ianvs/prettier-plugin-sort-imports',
        "prettier-plugin-tailwindcss",
        // require.resolve("prettier-plugin-packagejson")
    ],
    importOrder: [
        '^react',
        '<TYPES>',
        '<TYPES>^[./]',
        '<THIRD_PARTY_MODULES>',
        '',
        '@mindplanr/(.*)$',
        '',
        '^@/(.*)$',
        '^[./]',
    ],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.4',
}

module.exports = config;