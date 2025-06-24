export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your source files
    "./public/index.html", // Add the public/index.html file if necessary
  ],
  theme: {
    extend: {
      fontSize: {
        "course-details-heading-small": ["26px", "36px"],
        "course-details-heading-large": ["36px", "44px"],
        "home-heading-small": ["28px", "34px"],
        "home-heading-large": ["48px", "56px"],
        default: ["15px", "21px"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit, minmax(200px, 1fr))", // Responsive grid columns
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here if needed
  ],
};
