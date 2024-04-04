import { Stack } from "@chakra-ui/react";
import { MobileNavItem } from "./MobileNavItem";

export function MobileNav({ navItems }) {
  return (
    <Stack
      bg={"blackAlpha.600"}
      backdropFilter="auto"
      backdropBlur="3px"
      p={4}
      mx={4}
      mt={6}
      rounded={"md"}
      display={{ md: "none" }}
      animation={"all 1s ease-in-out"}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
}
