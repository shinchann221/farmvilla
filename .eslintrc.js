/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ['next/core-web-vitals', require.resolve('@vercel/style-guide/eslint/next')],
    plugins: ['only-warn'],
    ignorePatterns: [
        // Ignore dotfiles
        '.*.js',
        'node_modules/',
        '.next/'
    ]
}
