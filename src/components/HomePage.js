import { Button, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Logos from "./Logos";
import { EditContext, ColourContext } from "../helper/Context";
import { useContext } from "react";
import EditLogos from "./EditLogos";

function HomePage() {
  const { canEdit, setCanEdit } = useContext(EditContext);
  const { colourMode, setColourMode } = useContext(ColourContext);

  const toggleEdit = () => {
    setCanEdit(!canEdit);
  };

  useEffect(() => {
    const storedColour = localStorage.getItem("colourMode");
    setColourMode(storedColour);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VStack
      className="container"
      textAlign="center"
      p="20px"
      m="0"
      w={canEdit ? "400px" : "300px"}
      h="100%"
      spacing="20px"
      backgroundImage={
        colourMode === "Tangerine"
          ? "linear-gradient(to bottom right, #FF8583, #FFD194)"
          : colourMode === "Space"
          ? "linear-gradient(to bottom right, #3C2446, #5B7BBB)"
          : colourMode === "Matcha"
          ? "linear-gradient(to bottom right, #739C59, #D4EFC1)"
          : "linear-gradient(to bottom right, #3394D8, #6ADBFF)"
      }
    >
      <HStack
        w="100%"
        spacing={canEdit ? "142px" : "84px"}
        position="relative"
        right="17px"
      >
        <Img
          ml={canEdit ? "20px" : "0px"}
          h="60px"
          src={`/images/LinktLogoText.png`}
          alt="Linkt logo text"
        />
        <Img boxSize="60px" src={`/images/LinktLogo.png`} alt="Linkt logo" />
      </HStack>
      <Text fontWeight="bold" textAlign="justify" fontSize="20px">
        {canEdit
          ? "Click on an icon to edit the link! :D"
          : "Click on a link to copy it to your clipboard! :')"}
      </Text>
      {canEdit ? <EditLogos /> : <Logos />}
      <HStack pb="7px">
        {!canEdit && (
          <Button
            className="button"
            bg={
              colourMode === "Tangerine"
                ? "#FF7D60"
                : colourMode === "Space"
                ? "#4D2B5B"
                : colourMode === "Matcha"
                ? "#709558"
                : "#3792D1"
            }
            _hover={
              colourMode === "Tangerine"
                ? { bg: "#FF5A34" }
                : colourMode === "Space"
                ? { bg: "#33183F" }
                : colourMode === "Matcha"
                ? { bg: "#2E3E24" }
                : { bg: "#1F5881" }
            }
            onClick={toggleEdit}
          >
            Manage my links
          </Button>
        )}
      </HStack>
    </VStack>
  );
}

export default HomePage;
