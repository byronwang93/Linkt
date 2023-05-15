import { Button, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Logos from "./Logos";
import { EditContext } from "../helper/Context";
import { useContext } from "react";
import EditLogos from "./EditLogos";

function HomePage() {
  const { canEdit, setCanEdit } = useContext(EditContext);

  const toggleEdit = () => {
    setCanEdit(!canEdit);
  };

  return (
    <VStack
      className="container"
      textAlign="center"
      p="20px"
      m="0"
      w={canEdit ? "400px" : "300px"}
      h={canEdit ? "500px" : "390px"}
      spacing="20px"
    >
      <HStack
        w="100%"
        spacing={canEdit ? "142px" : "70px"}
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
      <HStack>
        {!canEdit && (
          <Button
            className="button"
            bg="#FF7D60"
            _hover={{ bg: "#FF5A34" }}
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
