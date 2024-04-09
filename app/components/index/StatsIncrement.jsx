import { Box, Text, Spacer } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

export function StatsIncrement() {
  const sectionsRef = useRef([]);
  const items = [
    { goal: 100, text: "Employees Owned", symbol: "%" },
    {
      goal: 30,
      text: "Over 30 Project in various industries",
      symbol: "",
    },
    { goal: 10, text: "With Nearly 10 Years in Buisness", symbol: "" },
  ];

  function startCount(sect, goal) {
    let count = 0;
    let increment = Math.ceil(goal / 100); // Increment by 1% of the goal
    let timer = setInterval(() => {
      count += increment;
      if (count >= goal) {
        count = goal;
        clearInterval(timer);
      }
      sect.textContent = count;
    }, 10);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const goal = parseInt(entry.target.getAttribute("data-goal"));
            startCount(entry.target, goal);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      height={"80vh"}
      bgImage={"url(/images/bg.jpg)"}
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="space-between"
      alignItems="center"
      padding={{ base: "20px", md: "40px" }}
      maxW={"1350px"}
      margin="0 auto"
    >
      <Box
        flexBasis={{ base: "100%", md: "40%" }}
        textAlign={{ base: "center", md: "left" }}
        maxW={"400px"}
      >
        <Text fontSize={{ base: "2xl", md: "5xl" }} fontWeight="bold" mb={4}>
          Building for the best
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }}>
          To explore and go after new ways to build, we’ve gathered the people,
          innovations, and partnerships that can anticipate and overcome new
          challenges.
        </Text>
      </Box>
      <Spacer display={{ base: "none", md: "block" }} />
      <Box flexBasis={{ base: "100%", md: "20%" }}>
        {items.map((item, i) => (
          <Box mb={4} key={i}>
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold">
              <span
                ref={(el) => (sectionsRef.current[i] = el)}
                data-goal={item.goal}
              >
                0
              </span>
              {item.symbol}
            </Text>
            {item.addPercent ? "%" : ""}
            <Text fontSize={{ base: "sm", md: "md" }}>{item.text}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
