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
        "prettier-plugin-packagejson",
        "prettier-plugin-organize-imports"
    ],
    importOrder: [
        '^react',
        '<TYPES>',
        '<TYPES>^[./]',
        '<THIRD_PARTY_MODULES>',
        '',
        '^@/(.*)$',
        '^[./]',
    ],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.4',
}

module.exports = config;