import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { ContactButton } from "./contact/ContactButton";
import { ContactIconButton } from "./contact/ContactIconButton";

export function Contact() {
  return (
    <Box position={"relative"}>
      <Image
        src="/images/contact.jpg"
        alt="rekaz-contact"
        height={"100vh"}
        width={"100vw"}
        objectFit={"cover"}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor={`rgb(0,0,0)`}
        opacity="0.3"
      />
      <Flex
        position={"absolute"}
        top={["50%", "25%"]}
        left={["0", "37.5%"]}
        mx={"5%"}
        transform={[undefined, "translateY(-12.5%)"]}
      >
        <Box
          bg="white"
          color="gray.700"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Fill up the form below to contact
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <ContactButton
                        text={"+91-988888888"}
                        icon={<MdPhone color="black" size="20px" />}
                        link={"tel:+91-988888888"}
                      />
                      <ContactButton
                        text={"info@mail.com"}
                        icon={<MdEmail color="black" size="20px" />}
                        link={"mailto:info@mail.com"}
                      />
                      <ContactButton
                        text={"Karnavati, India"}
                        icon={<MdLocationOn color="black" size="20px" />}
                        link={"#"}
                      />
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <ContactIconButton
                      label={"facebook"}
                      icon={<MdFacebook size="28px" />}
                    />
                    <ContactIconButton
                      label={"github"}
                      icon={<BsGithub size="28px" />}
                    />
                    <ContactIconButton
                      label={"discord"}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7" w={"120%"}>
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Phone</FormLabel>
                        <InputGroup borderColor="#E0E1E7" w={"120%"}>
                          <InputLeftElement pointerEvents="none">
                            <MdOutlinePhone color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7" w={"120%"}>
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.800" />
                          </InputLeftElement>
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                          w={"120%"}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="gray.600"
                          color="white"
                          _hover={{}}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
