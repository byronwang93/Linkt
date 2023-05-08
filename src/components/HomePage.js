import { Button, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Logos from "./Logos";
import { useToast } from "@chakra-ui/react";
import { EditContext } from "../helper/Context";
import { useContext } from "react";
import { useEffect } from "react";

function HomePage() {
  const { canEdit, setCanEdit } = useContext(EditContext);
  const toast = useToast();

  const toggleEdit = () => {
    setCanEdit(!canEdit);
  };

  useEffect(() => {
    if (!canEdit) {
      toast({
        title: "Saved!",
        status: "success",
        duration: 1000,
      });
    }
  }, [canEdit]);
  return (
    <VStack
      className="container"
      textAlign="center"
      p="20px"
      m="0"
      w="300px"
      h="390px"
      spacing="20px"
    >
      <HStack w="100%" spacing="70px" position="relative" right="17px">
        <Img h="60px" src={`/images/LinktLogoText.png`} alt="Linkt logo text" />
        <Img boxSize="60px" src={`/images/LinktLogo.png`} alt="Linkt logo" />
      </HStack>
      <Text fontWeight="bold" textAlign="justify" fontSize="20px">
        {canEdit
          ? "Click on an icon to edit the link! :D"
          : "Click on a link to copy it to your clipboard! :')"}
      </Text>
      <Logos />
      <HStack>
        <Button bg="#FF7D60" _hover={{ bg: "#FF5A34" }} onClick={toggleEdit}>
          {canEdit ? "Save" : "Manage my links"}
        </Button>
      </HStack>
    </VStack>
  );
}

export default HomePage;
