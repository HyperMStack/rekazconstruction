import { Navbar } from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { Box } from "@chakra-ui/react";

export function LayoutWrapper({ children, navItems, logo }) {
  return (
    <Box>
      <Navbar navItems={navItems} logo={logo} />
      {children}
      <Footer />
    </Box>
  );
}
