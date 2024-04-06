import { Box, Text } from "@chakra-ui/react";

export function TitlesSelector({ titles, selectedIndex, setSelectedIndex }) {
  return (
    <Box
      display="flex"
      gap={4}
      p={4}
      overflowX={"auto"}
      overflowY={"hidden"}
      boxSizing="border-box"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {titles.map((item) => (
        <Text
          key={item.id}
          onClick={() => setSelectedIndex(item.id)}
          borderBottom="2px solid"
          borderColor={selectedIndex === item.id ? "gray.700" : "gray.400"}
          mx={"-2"}
          mb={"-4"}
          px={16}
          pb={3}
          color={selectedIndex === item.id ? "gray.700" : "gray.400"}
          _hover={{
            color: "gray.700",
            borderColor: "gray.700",
            cursor: "pointer",
          }}
          _active={{ color: "gray.700", borderColor: "gray.700" }}
          transition="all 0.2s"
        >
          {item.title}
        </Text>
      ))}
    </Box>
  );
}
