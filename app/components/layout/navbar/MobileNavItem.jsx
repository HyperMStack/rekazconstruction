import {
  useDisclosure,
  Stack,
  Box,
  Icon,
  Collapse,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

export function MobileNavItem({ label, children, href }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        display={"flex"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600} color={"white"}>
          {label}
        </Text>
        {children && (
          <Icon
            color={"white"}
            as={FaAngleDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
          color={"white"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}
