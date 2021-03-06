import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider options={{ staleTime: 10 }} session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
