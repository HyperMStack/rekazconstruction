import { Box, Button, Text, Image, Flex } from "@chakra-ui/react";
import { TypingAnimation } from "./hero/TypingAnimation";

export function Hero({ data }) {
  return (
    <Box position={"relative"}>
      <Image
        src={data.image}
        alt={data.buttonText}
        height={["80vh", "auto"]}
        objectFit={["cover", "contain"]}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        backgroundColor={"black"}
        opacity="0.1"
      />
      <Flex
        bottom={"30%"}
        left={"10%"}
        position="absolute"
        direction="column" // Stack the text and button vertically
        alignItems="start"
        justifyContent="center" // Center the text and button vertically
        gap={4} // Add some space between the text and button
      >
        <Text fontSize={"8xl"} as={"b"} color="white">
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
