import { Text } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";
import { useTrail, animated } from "react-spring";

export const TypingAnimation = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(words[index]);
  const wordRef = useRef(word); // Use a ref to store the current word

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
      const newWord = words[index];
      setWord(newWord);
      wordRef.current = newWord; // Update the ref with the new word
    }, 3000); // Change word every 3 seconds
    return () => clearTimeout(timer);
  }, [index, words]);

  // Use useTrail to create a staggered animation for each letter
  const trail = useTrail(wordRef.current.length, {
    from: { opacity: 0, transform: "scale(0)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { duration: 500 },
    delay: 75, // Adjust delay as needed
    reset: true, // Reset animation on word change
    keys: wordRef.current, // Use the current word as a key to reset the animation
  });

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      {trail.map((animation, i) => (
        <animated.div key={i} style={animation}>
          <Text as={"b"} fontSize={"8xl"} color={"white"}>
            {wordRef.current[i]}
          </Text>
        </animated.div>
      ))}
    </div>
  );
};
