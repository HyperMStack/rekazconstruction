import { IconButton } from "@chakra-ui/react";
export function ContactIconButton({ icon, label }) {
  return (
    <IconButton
      aria-label={label}
      variant="ghost"
      size="lg"
      isRound={true}
      _hover={{ border: "2px solid gray" }}
      icon={icon}
    />
  );
}
