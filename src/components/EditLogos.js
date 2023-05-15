import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { useState } from "react";
import { EditContext } from "../helper/Context";
import {
  Email,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  PersonalWebsite,
  Twitter,
  Youtube,
} from "../images/icons";

const logos = [
  {
    logo: Email,
    name: "Email",
  },
  {
    logo: Facebook,
    name: "Facebook",
  },
  {
    logo: Github,
    name: "Github",
  },
  {
    logo: Instagram,
    name: "Instagram",
  },
  {
    logo: Linkedin,
    name: "Linkedin",
  },
  {
    logo: PersonalWebsite,
    name: "Personal site",
  },
  {
    logo: Twitter,
    name: "Twitter",
  },
  {
    logo: Youtube,
    name: "Youtube",
  },
];

const EditLogos = () => {
  const { canEdit, setCanEdit } = useContext(EditContext);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const resetStorage = () => {
    localStorage.setItem("linktEmail", "");
    localStorage.setItem("linktFacebook", "");
    localStorage.setItem("linktGithub", "");
    localStorage.setItem("linktInstagram", "");
    localStorage.setItem("linktLinkedin", "");
    localStorage.setItem("linktPersonalWebsite", "");
    localStorage.setItem("linktTwitter", "");
    localStorage.setItem("linktYoutube", "");

    onClose();
    setCanEdit(!canEdit);
    toast({
      title: "Values reset!",
      status: "success",
      duration: 1000,
    });
  };

  const saveValues = () => {
    localStorage.setItem("linktEmail", messageEmail);
    localStorage.setItem("linktFacebook", messageFacebook);
    localStorage.setItem("linktGithub", messageGithub);
    localStorage.setItem("linktInstagram", messageInstagram);
    localStorage.setItem("linktLinkedin", messageLinkedin);
    localStorage.setItem("linktPersonalWebsite", messagePersonalWebsite);
    localStorage.setItem("linktTwitter", messageTwitter);
    localStorage.setItem("linktYoutube", messageYoutube);
    setCanEdit(!canEdit);

    toast({
      title: "Saved!",
      status: "success",
      duration: 1000,
    });
  };

  const [messageEmail, setMessageEmail] = useState(
    localStorage.getItem("linktEmail") === null
      ? ""
      : localStorage.getItem("linktEmail")
  );
  const [messageFacebook, setMessageFacebook] = useState(
    localStorage.getItem("linktFacebook") === null
      ? ""
      : localStorage.getItem("linktFacebook")
  );
  const [messageGithub, setMessageGithub] = useState(
    localStorage.getItem("linktGithub") === null
      ? ""
      : localStorage.getItem("linktGithub")
  );
  const [messageInstagram, setMessageInstagram] = useState(
    localStorage.getItem("linktInstagram") === null
      ? ""
      : localStorage.getItem("linktInstagram")
  );
  const [messageLinkedin, setMessageLinkedin] = useState(
    localStorage.getItem("linktLinkedin") === null
      ? ""
      : localStorage.getItem("linktLinkedin")
  );
  const [messagePersonalWebsite, setMessagePersonalWebsite] = useState(
    localStorage.getItem("linktPersonalWebsite") === null
      ? ""
      : localStorage.getItem("linktPersonalWebsite")
  );
  const [messageTwitter, setMessageTwitter] = useState(
    localStorage.getItem("linktTwitter") === null
      ? ""
      : localStorage.getItem("linktTwitter")
  );
  const [messageYoutube, setMessageYoutube] = useState(
    localStorage.getItem("linktYoutube") === null
      ? ""
      : localStorage.getItem("linktYoutube")
  );

  return (
    <Box>
      <VStack height="250px" width="290px" spacing="20px" overflowY="scroll">
        {logos.map(({ logo, name }, index) => {
          return (
            <InputGroup pr="10px" key={index}>
              <InputLeftElement>
                <Icon boxSize="30px" as={logo} />
              </InputLeftElement>
              <Input
                value={
                  name === "Facebook"
                    ? messageFacebook
                    : name === "Email"
                    ? messageEmail
                    : name === "Github"
                    ? messageGithub
                    : name === "Instagram"
                    ? messageInstagram
                    : name === "Linkedin"
                    ? messageLinkedin
                    : name === "Personal site"
                    ? messagePersonalWebsite
                    : name === "Twitter"
                    ? messageTwitter
                    : messageYoutube
                }
                onChange={(event) => {
                  if (name === "Facebook") {
                    setMessageFacebook(event.target.value);
                  } else if (name === "Email") {
                    setMessageEmail(event.target.value);
                  } else if (name === "Github") {
                    setMessageGithub(event.target.value);
                  } else if (name === "Instagram") {
                    setMessageInstagram(event.target.value);
                  } else if (name === "Linkedin") {
                    setMessageLinkedin(event.target.value);
                  } else if (name === "Personal site") {
                    setMessagePersonalWebsite(event.target.value);
                  } else if (name === "Twitter") {
                    setMessageTwitter(event.target.value);
                  } else if (name === "Youtube") {
                    setMessageYoutube(event.target.value);
                  }
                }}
                placeholder={name}
              />
            </InputGroup>
          );
        })}
      </VStack>
      <HStack spacing="26px" pt="25px">
        <Button
          className="button"
          bg="#FF7D60"
          _hover={{ bg: "#FF5A34" }}
          onClick={saveValues}
          ml="21%"
        >
          Done
        </Button>
        <Button
          className="button"
          bg="#FF7D60"
          _hover={{ bg: "#FF5A34" }}
          onClick={onOpen}
        >
          Reset
        </Button>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text color="black">Confirmation</Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="black">
              Are you sure you want to reset your links?
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button
              className="button"
              bg="#FF7D60"
              _hover={{ bg: "#FF5A34" }}
              onClick={resetStorage}
            >
              Reset links
            </Button>
            <Button
              ml="20px"
              className="button"
              bg="#FF7D60"
              _hover={{ bg: "#FF5A34" }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EditLogos;