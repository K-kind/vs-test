module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier', // config に基づいて、除外する = かぶらないようにする
    'prettier/vue',
    // 'plugin:prettier/recommended',
    'plugin:nuxt/recommended', // composition-apiでは役に立たなそう https://github.com/nuxt/eslint-plugin-nuxt
  ],
  plugins: [
    // 'prettier'
  ],
  rules: {},
}
