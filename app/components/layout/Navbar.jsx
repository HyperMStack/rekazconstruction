import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useDisclosure,
  Spacer,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";

export const Navbar = ({ navItems, logo }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"absolute"} left={0} top={0} zIndex={1000} width={"100%"}>
      <Flex minH={"60px"} py={2} px={[4, 40]} align={"center"}>
        <Flex flex={[1, "auto"]} ml={-2} display={["flex", "none"]}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <FaTimes w={3} h={3} /> : <FaBars w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={["center", "start"]}>
          <Link flex={1} href="/">
            <Image src={logo.dark} alt="Rekaz-logo" height={"140px"} />
          </Link>
          <Flex
            flex={2}
            display={["none", "flex"]}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <DesktopNav navItems={navItems} />
          </Flex>
          <Spacer flex={1} />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </Box>
  );
};
