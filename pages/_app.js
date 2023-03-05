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
        /** Put your mantine theme override here */
        colorScheme: "light",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
