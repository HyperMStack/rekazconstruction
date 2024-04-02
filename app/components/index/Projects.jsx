import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";

export function Projects({ projects }) {
  return (
    <Box>
      <Text fontSize="5xl" fontWeight="bold" textAlign={"center"} mb={4}>
        Our Latest Projects
      </Text>
      <Flex gap={4} flexWrap="wrap" align="center" justify="center">
        {projects.map((project) => (
          <Box
            key={project.id}
            mb={4}
            mx={"auto"}
            overflow={"hidden"}
            width={{ base: "90%", md: "30%" }} // Adjusts width based on screen size
            height={{ base: "200px", md: "300px" }} // Adjusts height based on screen size
          >
            <Link href={`/${project?.slug}`}>
              <Box
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.1)" }}
                position="relative"
                width="100%"
                height="100%"
              >
                <Image
                  src={project.thumbImage}
                  alt={project.title}
                  transition="transform 0.3s ease-in-out"
                  objectFit={"contain"}
                />
              </Box>
              <Text textAlign="center" mt={2}>
                {project.title}
              </Text>
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
