// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: ["./client/**/*.{ts,tsx}"],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         sidebar: {
//           DEFAULT: "hsl(var(--sidebar-background))",
//           foreground: "hsl(var(--sidebar-foreground))",
//           primary: "hsl(var(--sidebar-primary))",
//           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
//           accent: "hsl(var(--sidebar-accent))",
//           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
//           border: "hsl(var(--sidebar-border))",
//           ring: "hsl(var(--sidebar-ring))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: {
//             height: "0",
//           },
//           to: {
//             height: "var(--radix-accordion-content-height)",
//           },
//         },
//         "accordion-up": {
//           from: {
//             height: "var(--radix-accordion-content-height)",
//           },
//           to: {
//             height: "0",
//           },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;
// // tailwind.config.js
// module.exports = {
//   content: [
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: 0 },
//           '100%': { opacity: 1 },
//         },
//         fadeInDown: {
//           '0%': { opacity: 0, transform: 'translateY(-20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//         fadeInUp: {
//           '0%': { opacity: 0, transform: 'translateY(20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//         fadeInLeft: {
//           '0%': { opacity: 0, transform: 'translateX(-20px)' },
//           '100%': { opacity: 1, transform: 'translateX(0)' },
//         },
//         fadeInRight: {
//           '0%': { opacity: 0, transform: 'translateX(20px)' },
//           '100%': { opacity: 1, transform: 'translateX(0)' },
//         },
//       },
//       animation: {
//         fadeIn: 'fadeIn 0.5s ease-out forwards',
//         fadeInDown: 'fadeInDown 0.6s ease-out forwards',
//         fadeInUp: 'fadeInUp 0.6s ease-out forwards',
//         fadeInLeft: 'fadeInLeft 0.7s ease-out forwards',
//         fadeInRight: 'fadeInRight 0.7s ease-out forwards',
//         pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Default pulse
//       },
//     },
//   },
//   plugins: [],
// };


// tailwind.config.js (or .ts)

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    // Yeh path aapke project ke liye sahi lag raha hai
    "./client/**/*.{ts,tsx}",
    // Aap aur specific paths bhi add kar sakte hain, jaise:
    // './client/pages/**/*.{ts,tsx}',
    // './client/components/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Aapke saare custom colors
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      // Aapka custom border radius
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      // Dono configurations se keyframes merge kar diye gaye hain
      keyframes: {
        // Accordion animations
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // FadeIn animations
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
        fadeInDown: {
          '0%': { opacity: "0", transform: 'translateY(-20px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: "0", transform: 'translateY(20px)' },
          '100%': { opacity:" 1", transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: "0", transform: 'translateX(-20px)' },
          '100%': { opacity: "1", transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: "0", transform: 'translateX(20px)' },
          '100%': { opacity: "1", transform: 'translateX(0)' },
        },
      },
      // Dono configurations se animations merge kar diye gaye hain
      animation: {
        // Accordion animations
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // FadeIn animations
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInDown: 'fadeInDown 0.6s ease-out forwards',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeInLeft: 'fadeInLeft 0.7s ease-out forwards',
        fadeInRight: 'fadeInRight 0.7s ease-out forwards',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;