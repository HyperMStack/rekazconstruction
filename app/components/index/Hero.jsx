import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { TypingAnimation } from "./hero/TypingAnimation";

export function Hero({ data }) {
  return (
    <Box position={"relative"}>
      <Image
        src={data.image}
        alt={data.buttonText}
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
        backgroundImage={`linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))`}
        // opacity="0.3"
      />
      <Flex
        bottom={"15%"}
        left={"10%"}
        position="absolute"
        direction="column" // Stack the text and button vertically
        alignItems="start"
        justifyContent="center" // Center the text and button vertically
        gap={4} // Add some space between the text and button
      >
        <Text fontSize={["7xl", "8xl"]} as={"b"} color="white">
          {data.text}
        </Text>
        <TypingAnimation words={data.typedText} />
        <Button bg="white" size={"lg"} color="black" rounded={0}>
          {data.buttonText}
        </Button>
      </Flex>
    </Box>
  );
}
