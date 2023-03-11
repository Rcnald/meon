/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'font-text-read':'var(--font-text-read)',
        'font-main':'var(--font-main)',
        'font-accent':'var(--font-accent)',
      },
      colors:{
        'color-main':'var(--main-color)',
        'color-main-constrast':'var(--main-color-contrast)',
        'color-text':'var(--text-color)',
        'color-text-constrast':'var(--text-color-constrast)',
        'color-header':'var(--header-color)',
        'color-description':'var(--description-color)',
        'color-placeholder':'var(--placeholder-color)',
        'color-whatsapp':'var(--whatsapp-color)',
        'color-facebook':'var(--facebook-color)',
        'color-instagram':'var(--instagram-color)',
        'color-linkedin':'var(--linkedin-color)',
        'color-youtube':'var(--youtube-color)',
      },
    },
  },
  plugins: [],
}
