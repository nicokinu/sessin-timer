const purgecss = require('@fullhuman/postcss-purgecss')
const plugins =
  process.env.NODE_ENV === 'production'
    ? [
        'tailwindcss', 'autoprefixer',
        purgecss({
          content: ['./**/*.html', './**/*.svelte']
        })
      ]
    : ['tailwindcss'];

module.exports = { plugins: plugins };
