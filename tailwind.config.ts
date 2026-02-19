import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@gpters-internal/ui/components/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
