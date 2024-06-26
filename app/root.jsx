import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "./tailwind.css";
import { LayoutWrapper } from "./components/LayoutWrapper";
import { navLinks, websiteData } from "./data/data";

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
    <LayoutWrapper logo={websiteData.logo} navItems={navLinks}>
      <Outlet />
    </LayoutWrapper>
  );
}
