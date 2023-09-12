import Image from "next/image";

import {
  Box,
  Heading,
  HStack,
  Spacer
} from "@chakra-ui/react";

import profilePic from "../../imgs/welcome.png";

interface PageType {
  _id: string;
  name: string;
  url: string;
}

function WelcomeIcon() {
  return (
    <Image
      alt="Welcome!"
      height={50}
      src={profilePic}
      width={50}
    />
  );
}

function NavBar() {
  const pages = [
    {
      _id: 0,
      name: "About Jake",
      url: "./about.tsx"
    },
    {
      _id: 1,
      name: "Projects",
      url: "./projects.tsx"
    },
    {
      _id: 2,
      name: "Contact Jake",
      url: "./contact.tsx"
    }
  ];

  return (
    <nav>
      <Box
        display="flex"
        h="3rem"
        justifyContent="center"
        width="full"
        zIndex="999"
      >
        <WelcomeIcon />
        <Heading>
          Jake Lee&apos;s Portfolio
        </Heading>
        <Spacer />
        <HStack
          display="flex"
          justifyContent="right"
          width="full"
        >
          {pages.map((page) => (
            <Box 
              display="flex"
              key={page._id}
            ><a href={page.url}>{page.name}</a></Box>
          ))}
        </HStack>
      </Box>
    </nav>
  );
}

export default NavBar;
