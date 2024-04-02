import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Box } from "@chakra-ui/react";

export function Layout({ children, navItems }) {
  return (
    <Box>
      <Navbar navItems={navItems} />
      {children}
      <Footer />
    </Box>
  );
}
