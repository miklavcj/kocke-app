module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/kocke-app/'
      : '/',
      pwa: {
  name: "KOCKE",
  short_name: "   ",
  themeColor: "#ffffff",
  msTileColor: '#ffffff',
  icons: [
      {
          "src": "./img/kocke-logo-final.png",
          "sizes": "512x512",
          "type": "image/png"
      },
  ],
  start_url: ".",
  manifestOptions: {
    background_color: "#ffffff",
    display: "standalone",
  }
}  
  }