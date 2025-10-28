
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif'], // Primary font
				body: ['Poppins', 'sans-serif'], // Secondary font for body text
				heading: ['Space Grotesk', 'sans-serif'], // New heading font
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// КиноКупол custom colors
				kinokupol: {
					primary: "#9b87f5", // Primary purple
					secondary: "#7E69AB", // Secondary purple
					tertiary: "#6E59A5", // Tertiary purple
					dark: "#1A1F2C", // Dark purple
					light: "#D6BCFA", // Light purple
					"soft-purple": "#E5DEFF", // Soft purple
					"soft-blue": "#D3E4FD", // Soft blue
					"brand-dark-purple": "#2a0e4f",
					"brand-very-dark-purple": "#1c0936",
				},
				// Science section-inspired colors
				science: {
					accent: "#80dfd5", // Light turquoise
					dark: "#243949", // Dark slate blue
					darker: "#152435", // Very dark slate blue
					light: "#c5f4f0", // Lighter turquoise
					text: "#80dfd5", // Turquoise text
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				        'fade-in': {
									'0%': { opacity: '0', transform: 'translateY(10px)' },
									'100%': { opacity: '1', transform: 'translateY(0)' }
								},
								                'title-animation': {
								                  '0%': { opacity: '0', transform: 'translateY(40px) rotate(-10deg) scale(0.9)' },
								                  '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg) scale(1)' },
								                }			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				        'accordion-up': 'accordion-up 0.2s ease-out',
								'fade-in': 'fade-in 0.3s ease-out',
								        'title-animation': 'title-animation 1.5s ease-in-out forwards'			},
			backgroundImage: {
				'main-gradient': 'linear-gradient(135deg, #9b87f5 0%, #D6BCFA 100%)',
				'secondary-gradient': 'linear-gradient(135deg, #E5DEFF 0%, #D6BCFA 100%)',
				'science-gradient': 'linear-gradient(to right, #2a0e4f 0%, #1c0936 100%)',
				'glow-gradient': 'linear-gradient(to right, #80dfd5 0%, #9b87f5 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
