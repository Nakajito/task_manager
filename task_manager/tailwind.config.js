module.exports = {
  content: [
    "./templates/**/*.html", // Ruta de tus plantillas Django
    "./theme/templates/**/*.html", // Plantillas dentro de la app theme
    "./static/js/**/*.js", // Archivos JS en tu carpeta estática
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#14171A',
        accent: '#657786',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};

