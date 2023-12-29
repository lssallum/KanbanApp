import CssBaseLine from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import router from "./router";


function App() {
  const theme = createTheme({
    palette: { mode: "dark" },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
