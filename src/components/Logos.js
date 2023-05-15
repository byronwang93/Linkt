import { Box, Icon, Text, useToast, Wrap } from "@chakra-ui/react";
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
];

const Logos = () => {
  const toast = useToast();

  const keysWithValues = [];
  for (let i = 0; i < linktKeys.length; i++) {
    const curr = linktKeys[i].link;
    const value = localStorage.getItem(curr);
    console.log(value, " is the curr for the value of ", linktKeys[i]);
    if (value !== null && value !== "") {
      keysWithValues.push(linktKeys[i]);
    }
  }

  console.log(keysWithValues, " is the array");

  return (
    <Wrap width="250px">
      {keysWithValues.length === 0 ? (
        <Text>No links saved yet, manage your links to get started!</Text>
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
