import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export function Projects({ projects }) {
  return (
    <Box>
      <Text fontSize="5xl" fontWeight="bold" textAlign={"center"} mb={4}>
        Our Latest Projects
      </Text>
      <Flex gap={4} flexWrap="wrap">
        {projects.map((project) => (
          <Box
            key={project.id}
            mb={4}
            overflow={"hidden"}
            width="300px"
            height="200px"
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
                  layout="fill"
                  objectFit="cover"
                  transition="transform 0.3s ease-in-out"
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
