/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			secondary: '#F6F6F6',
  			darkGray: '#E9E9E9',
  			gray: '#b2b2b2',
  			bag: '#FF0000',
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		boxShadow: {
  			activeSlider: '0 0 10px 0 rgba(0, 0, 0, 0.25)',
			footer: '0px -3px 5px -2px rgba(171, 171, 171, 0.5)'
  		},
  		flex: {
  			shopElement: '1 1 250px'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}