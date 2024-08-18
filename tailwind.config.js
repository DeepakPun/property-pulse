/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}

/*
 Go to console.cloud.google.com
 Create a project -  PropertyPulseNextJS
 No organization - > create
 click hamburger - api and oauths - oauth consent screen - external - apname=propertypulseapp, support email
 contact info
 save and continue
 add or remove scopes - check => userinfo email and profile, update, save and continue
 add users - add two gmail accounts save and continue
 back to dashboard
 click credentials -> create credentials -> oauth client id -> web application -> name it PropertyPulse
 add uri -> http://localhost:3000 for auth js origin and http://localhost:3000/api/auth/callback/google for auth redirect uris
 click create
 copy client id and client secret
 .env NEXTAUTH_URL=http://localhost:3000
			NEXTAUTH_INTERNAL=http://localhost:3000
			NEXTAUTH_SECRET=RW+FBIRiLSdbr67dRwp9QeMW6zk8OkDD/bNT2AlKk/M=
*/

