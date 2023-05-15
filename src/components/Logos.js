import { Box, HStack, Icon, Img, Text, useToast, Wrap } from "@chakra-ui/react";
import React from "react";
import {
  Email,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  PersonalWebsite,
  Twitter,
  Youtube,
  OneIcon,
  TwoIcon,
  ThreeIcon,
  FourIcon,
} from "../images/icons";

const linktKeys = [
  {
    logo: Email,
    name: "Email",
    link: "linktEmail",
  },
  {
    logo: Facebook,
    name: "Facebook",
    link: "linktFacebook",
  },
  {
    logo: Github,
    name: "GitHub",
    link: "linktGithub",
  },
  {
    logo: Instagram,
    name: "Instagram",
    link: "linktInstagram",
  },
  {
    logo: Linkedin,
    name: "Linkedin",
    link: "linktLinkedin",
  },
  {
    logo: PersonalWebsite,
    name: "Personal site",
    link: "linktPersonalWebsite",
  },
  {
    logo: Twitter,
    name: "Twitter",
    link: "linktTwitter",
  },
  {
    logo: Youtube,
    name: "YouTube",
    link: "linktYoutube",
  },
  {
    logo: OneIcon,
    name: "Personal link 1",
    link: "linktLink1",
  },
  {
    logo: TwoIcon,
    name: "Personal link 2",
    link: "linktLink2",
  },
  {
    logo: ThreeIcon,
    name: "Personal link 3",
    link: "linktLink3",
  },
  {
    logo: FourIcon,
    name: "Personal link 4",
    link: "linktLink4",
  },
];

const Logos = () => {
  const toast = useToast();

  const keysWithValues = [];
  for (let i = 0; i < linktKeys.length; i++) {
    const curr = linktKeys[i].link;
    const value = localStorage.getItem(curr);
    if (value !== null && value !== "") {
      keysWithValues.push(linktKeys[i]);
    }
  }

  return (
    <Wrap width="250px">
      {keysWithValues.length === 0 ? (
        <HStack>
          <Text textAlign="start" fontWeight="bold">
            No links saved yet, manage your links to get started!
          </Text>
          <Img boxSize="110px" src={`/images/no_links.png`} alt="Linkt logo" />
        </HStack>
      ) : (
        keysWithValues.map(({ name, link, logo }, index) => {
          const savedLink = localStorage.getItem(link);
          return (
            <Box margin="0px" boxSize="55px" key={index}>
              <Icon
                onClick={() => {
                  toast({
                    title: `${name} copied!`,
                    status: "success",
                    duration: 1000,
                  });

                  navigator.clipboard.writeText(savedLink);
                }}
                _hover={{ cursor: "pointer", boxSize: "54px" }}
                boxSize="50px"
                ml="6px"
                mr="6px"
                as={logo}
              />
            </Box>
          );
        })
      )}
    </Wrap>
  );
};

export default Logos;
