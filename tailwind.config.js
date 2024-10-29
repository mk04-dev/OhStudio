const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
	theme: {
		extend: {
			keyframes: {
				slideUp: {
					"0%": {
						opacity: 0,
            transform: "translateY(150px)",
					},
					"100̀%": {
						opacity: 1,
            transform: "translateY(0px)",
					},
				},
        slideLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(150px)",
          },
          "100̀%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
        slideRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-150px)",
          },
          "100̀%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
			},
			animation: {
        slideUp: 'slideUp 1s cubic-bezier(0.51, 0.11, 0.32, 0.97)',
        slideLeft: 'slideLeft 1s cubic-bezier(0.51, 0.11, 0.32, 0.97)',
        slideRight: 'slideRight 1s cubic-bezier(0.51, 0.11, 0.32, 0.97)',
      },
		},
	},
	plugins: [flowbite.plugin()],
};
