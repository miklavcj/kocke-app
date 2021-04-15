module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/kocke-app/'
      : '/',
      pwa: {
  name: "Kocke",
  short_name: "Kocke",
  theme_color: "#4DBA87",
  "icons": [
      {
          "src": "./img/icons/kocke.png",
          "sizes": "192x192",
          "type": "image/png"
      },
  ],
  start_url: ".",
  display: "standalone",
  background_color: "#ffffff"
}
    
      
  }