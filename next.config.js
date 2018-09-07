const withSass = require('@zeit/next-sass')

module.exports = {
  distDir: 'dist',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': { page: '/post', query: { title: "Hello Next.js" } },
      '/p/learn-nextjs': { page: '/post', query: { title: "Learn Next.js is awesome" } },
      '/p/deploy-nextjs': { page: '/post', query: { title: "Deploy apps with Zeit" } }
    }
  },
  // webpack: (config, options) => {
  //   const { dev, isServer } = options
  //   config.module.rules.push({
  //     test: /\.(css|scss)$/,
  //     use: cssLoaderConfig(extractCSSPlugin, {
  //       cssModules,
  //       dev,
  //       isServer
  //     })
  //   })
  //   return config
  // }
}