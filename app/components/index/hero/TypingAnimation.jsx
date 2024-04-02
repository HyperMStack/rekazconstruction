import { Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export const TypingAnimation = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(words[index]);
  const wordRef = useRef(word); // Use a ref to store the current word
  const controls = useAnimation(); // Framer Motion animation controls

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      const newWord = words[index];
      setWord(newWord);
      wordRef.current = newWord; // Update the ref with the new word
      // Trigger the animation for the new word
      controls.start({
        opacity: [0, 1],
        scale: [0, 1],
        transition: {
          duration: 0.5,
          delay: (i) => i * 0.05, // Delay increases with each letter
          staggerChildren: 0.05, // Optional: Adds a delay between each child animation
        },
      });
    }, 3000); // Change word every 3 seconds
    return () => clearTimeout(timer);
  }, [index, words, controls]);

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      {wordRef.current.split("").map((letter, i) => (
        <motion.div
          key={i}
          custom={i}
          animate={controls}
          style={{ display: "inline-block" }}
        >
          <Text as={"b"} fontSize={"8xl"} color={"white"}>
            {letter}
          </Text>
        </motion.div>
      ))}
    </div>
  );
};
