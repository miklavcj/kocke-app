module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/kocke-app/'
      : '/',
      pwa: {
  name: "Kocke",
  short_name: "Kocke",
  themeColor: "#ffffff",
  msTileColor: '#ffffff',
  "icons": [
      {
          "src": "./img/icons/kocke.png",
          "sizes": "512x512 192x192",
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