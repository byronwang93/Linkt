import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { ColourContext } from "../helper/Context";

const ColourSchemes = () => {
  const { colourMode, setColourMode } = useContext(ColourContext);

  const colours = [
    {
      name: "Tangerine",
      gradient1: "#FF8583",
      gradient2: "#FFD194",
    },
    {
      name: "Space",
      gradient1: "#3C2446",
      gradient2: "#5B7BBB",
    },
    {
      name: "Matcha",
      gradient1: "#739C59",
      gradient2: "#D4EFC1",
    },
    {
      name: "Sky",
      gradient1: "#3394D8",
      gradient2: "#CAEFFB",
    },
  ];

  return (
    <HStack pt="25px" position="relative" spacing="26px">
      {colours.map(({ name, gradient1, gradient2 }, index) => {
        return (
          <VStack key={index}>
            <Text fontWeight="extrabold">{name}</Text>
            <Box
              border={name === colourMode ? "4px solid white" : "none"}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                localStorage.setItem("colourMode", name);
                setColourMode(name);
              }}
              borderRadius="100%"
              boxSize="40px"
              backgroundImage={`linear-gradient(to bottom right, ${gradient1}, ${gradient2})`}
            ></Box>
          </VStack>
        );
      })}
    </HStack>
  );
};

export default ColourSchemes;
