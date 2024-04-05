import { Box, Text } from "@chakra-ui/react";

export function TitlesSelector({ titles, setSelectedIndex }) {
  return (
    <Box
      display="flex"
      gap={4}
      p={4}
      overflowX={"auto"}
      overflowY={"hidden"} // Hide the vertical scrollbar
      boxSizing="border-box"
      sx={{
        "&::-webkit-scrollbar": {
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparrent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#888",
          borderRadius: "5px",
          transition: "all 0.2s",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "#555",
        },
      }}
    >
      {titles.map((item) => (
        <Text
          key={item.id}
          onClick={() => setSelectedIndex(item.id)}
          borderBottom="2px solid"
          borderColor="gray.500"
          mx={"-2"}
          mb={"-4"}
          px={16}
          pb={3}
          color={"gray.500"}
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
