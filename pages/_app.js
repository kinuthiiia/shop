import "../styles/globals.css";
import { createEmotionCache, MantineProvider } from "@mantine/core";

function MyApp({ Component, pageProps }) {
  const myCache = createEmotionCache({
    key: "mantine",
    prepend: false,
  });

  return (
    <MantineProvider
      withGlobalStyles
      emotionCache={myCache}
      withNormalizeCSS
      theme={{
        colorScheme: "light",
        // fontFamily: "Prompt",
        fontWeight: "light",
        breakpoints: {
          sm: 500,
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
