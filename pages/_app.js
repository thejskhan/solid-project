import "../sass/app.scss";

// 
import ThemeLayout from "../layouts/Theme";

import { ThemeContextProvider } from "../store/ThemeContext";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <ThemeLayout>
        <Component {...pageProps} />
      </ThemeLayout>
    </ThemeContextProvider>
  );
};

export default App;
