import plugin from "windicss/plugin";

export default plugin(
  ({ addUtilities, addComponents, config }) => {
    addComponents({
      ".btn": {
        padding: ".5rem 1rem",
        borderRadius: ".25rem",
        fontWeight: "600",
      },
      ".btn-blue": {
        backgroundColor: "#3490dc",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#2779bd",
        },
      },
    });
  },
  {
    theme: {
      
        colors: {
          primary: {
            DEFAULT: '#007f32',
            80: '#33995b',
            60: '#66b284',
            40: '#99ccad',
            20: '#cce5d6',
            red: '#f44336',
            blue: '#4299e1'
          },
        }
     
    },
  }
);
