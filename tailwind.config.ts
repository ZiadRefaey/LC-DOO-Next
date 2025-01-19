import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'rgba(var(--background))',
  			'card-background': 'rgba(var(--card-background))',
  			'primary-text': 'rgba(var(--primary-text))',
  			'secondary-text': 'rgba(var(--secondary-text))',
  			divider: 'rgba(var(--divider))',
  			primary: 'rgba(var(--primary))',
  			'btn-hover': 'rgba(var(--btn-hover))',
  			secondary: 'rgba(var(--secondary))',
  			'footer-background': 'rgba(var(--footer-background))',
  			success: 'rgba(var(--success))',
  			error: 'rgba(var(--error))'
  		},
  		borderRadius: {},
  		fontSize: {
  			'preset-1': [
  				'2rem',
  				{
  					lineHeight: '120%',
  					letterSpacing: '0px',
  					fontWeight: 700
  				}
  			],
  			'preset-2': [
  				'1.25rem',
  				{
  					lineHeight: '120%',
  					letterSpacing: '0px',
  					fontWeight: 700
  				}
  			],
  			'preset-3': [
  				'1rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px'
  				}
  			],
  			'preset-3-bold': [
  				'1rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px',
  					fontWeight: 700
  				}
  			],
  			'preset-4': [
  				'0.875rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px'
  				}
  			],
  			'preset-4-bold': [
  				'0.875rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px',
  					fontWeight: 700
  				}
  			],
  			'preset-5': [
  				'0.75rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px'
  				}
  			],
  			'preset-5-bold': [
  				'0.75rem',
  				{
  					lineHeight: '150%',
  					letterSpacing: '0px',
  					fontWeight: 700
  				}
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
