
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
				sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
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
				// Financial specific colors
				finance: {
					positive: 'hsl(var(--finance-positive))',
					negative: 'hsl(var(--finance-negative))',
					neutral: 'hsl(var(--finance-neutral))',
					'positive-surface': 'hsl(var(--finance-positive-surface))',
					'negative-surface': 'hsl(var(--finance-negative-surface))',
				},
				crypto: {
					bitcoin: 'hsl(var(--crypto-bitcoin))',
					ethereum: 'hsl(var(--crypto-ethereum))',
					litecoin: 'hsl(var(--crypto-litecoin))',
					ripple: 'hsl(var(--crypto-ripple))',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'neumorph-light': '10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff',
				'neumorph-dark': '8px 8px 16px rgba(0, 0, 0, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.05)',
				'neumorph-inset-light': 'inset 5px 5px 10px #d1d9e6, inset -5px -5px 10px #ffffff',
				'neumorph-inset-dark': 'inset 5px 5px 10px rgba(0, 0, 0, 0.4), inset -5px -5px 10px rgba(255, 255, 255, 0.05)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' },
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 10px rgba(0, 255, 136, 0.3)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'float': 'float 5s ease-in-out infinite',
				'glow': 'glow 3s ease-in-out infinite',
			},
			backdropBlur: {
				'xs': '2px',
			},
			backgroundImage: {
				'wealth-gradient': 'linear-gradient(135deg, hsl(var(--finance-positive)) 0%, hsl(var(--finance-gradient-end)) 100%)',
				'card-gradient-light': 'linear-gradient(145deg, #f5f7fa 0%, #e8edf2 100%)',
				'card-gradient-dark': 'linear-gradient(145deg, #1f2937 0%, #111827 100%)',
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
