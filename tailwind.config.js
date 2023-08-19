/** @type {import('tailwindcss').Config} */
export default {
  content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html", "./src/**/*.{tsx, ts}"
            ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 4px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [
    
  ],
}

