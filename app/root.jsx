import { ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { navLinks } from "./data/data";

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ChakraProvider>
      <LayoutWrapper navItems={navLinks}>
        <Outlet />
      </LayoutWrapper>
    </ChakraProvider>
  );
}
