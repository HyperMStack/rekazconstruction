import { Box, Text, Flex, Image } from "@chakra-ui/react";

export function Sectors({ sectorsData }) {
  return (
    <Box py={8} px={4} borderRadius="lg">
      <Text textAlign={"center"} fontSize="5xl" fontWeight="bold" mb={4}>
        Our Sectors
      </Text>
      <Flex flexWrap="wrap" justifyContent="center">
        {sectorsData.map((sector, i) => (
          <Box key={i} m={4} maxW="400px" textAlign="start">
            <Image
              src={sector.icon}
              alt={sector.title}
              boxSize="140px"
              mb={4}
            />
            <Text fontSize="2xl" fontWeight="bold" mb={2}>
              {sector.title}
            </Text>
            <Text>{sector.text}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
