import "../styles/globals.css";
import { createEmotionCache, MantineProvider } from "@mantine/core";
import { Uploader } from "uploader"; // Installed by "react-uploader".

export const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
});

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
