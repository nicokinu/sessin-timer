module.exports = {
  content: [
    './src/global/*.html',
    './src/**/*.svelte'
  ],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};