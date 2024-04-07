import { Button } from "@chakra-ui/react";
export function ContactButton({ icon, text, link }) {
  return (
    <Button
      as={"a"}
      size="md"
      height="48px"
      width="200px"
      variant="ghost"
      color="gray.700"
      _hover={{ border: "2px solid gray", cursor: "pointer" }}
      leftIcon={icon}
      href={link}
    >
      {text}
    </Button>
  );
}
