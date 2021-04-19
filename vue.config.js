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
          "src": "./img/android-chrome-512x512.png",
          "sizes": "512x512 192x192",
          "type": "image/png"
      },
  ],
  start_url: ".",
  manifestOptions: {
    background_color: "#ffffff",
    display: "standalone",
    themeColor: "#ffffff",
  }
}  
  }