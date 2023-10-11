module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '^/api': {
        target: '13.228.99.37',
        changeOrigin: true
      },
    }
  }
}
