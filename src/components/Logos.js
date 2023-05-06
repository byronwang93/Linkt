import { Box, Flex, Icon, useToast, Wrap } from "@chakra-ui/react";
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

const logos = [
  {
    logo: Email,
    name: "Email",
    link: "byronwang93@gmail.com",
  },
  {
    logo: Facebook,
    name: "Facebook",
    link: "https://www.facebook.com/byron.wang.319/",
  },
  {
    logo: Github,
    name: "GitHub",
    link: "https://github.com/byronwang93",
  },
  {
    logo: Instagram,
    name: "Instagram",
    link: "https://www.instagram.com/byronwang93/",
  },
  {
    logo: Linkedin,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/byronwang93/",
  },
  {
    logo: PersonalWebsite,
    name: "Personal site",
    link: "https://www.byronwang.com/",
  },
  {
    logo: Twitter,
    name: "Twitter",
    link: "https://twitter.com/MegaBub_Byron",
  },
  {
    logo: Youtube,
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCtNVS3vcyncIzCj_dKQdQBA",
  },
];

const Logos = () => {
  const toast = useToast();

  return (
    <Wrap width="250px">
      {logos.map(({ logo, name, link }, index) => {
        return (
          <Box margin="0px" boxSize="55px">
            <Icon
              onClick={() => {
                toast({
                  title: `${name} copied!`,
                  status: "success",
                  duration: 1000,
                });

                navigator.clipboard.writeText(link);
              }}
              _hover={{ cursor: "pointer", boxSize: "54px" }}
              boxSize="50px"
              ml="6px"
              mr="6px"
              as={logo}
            />
          </Box>
        );
      })}
    </Wrap>
  );
};

export default Logos;
