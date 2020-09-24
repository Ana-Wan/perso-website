module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('pdf-loader')
      .loader('pdf-loader')
      .options(
        {
            name: `files/[name].[ext]`
        }
      )
  }
}