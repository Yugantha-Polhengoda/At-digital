import "@/styles/globals.css";
import { cn } from "@/util/utils";
import { Raleway, Archivo } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";

import { ScrollToTop } from "@/components/common/ScrollToTop";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <style jsx global>{`
          html {
            font-family: ${raleway.style.fontFamily};
          }
        `}</style>
        <main
          data-scroll
          data-scroll-speed="0.5"
          className={cn(
            "min-h-screen font-raleway antialiased",
            raleway.variable,
            archivo.variable
          )}
        >
          <Component {...pageProps} />
          <ScrollToTop />
        </main>
      </NextUIProvider>
    </>
  );
}

export default App;
