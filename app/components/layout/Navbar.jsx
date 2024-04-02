import {
  Box,
  Flex,
  Text,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";

export const Navbar = ({ navItems }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={2}
        px={4}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={[1, "auto"]} ml={-2} display={["flex", "none"]}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FaTimes w={3} h={3} /> : <FaBars w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={["center", "start"]}>
          <Text
            textAlign={"center"}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Logo
          </Text>
          <Spacer />
          <Flex display={["none", "flex"]} ml={10}>
            <DesktopNav navItems={navItems} />
          </Flex>
          <Spacer />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
};
