import {
  Box,
  Flex,
  Spacer
} from "@chakra-ui/react";

import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

import Intro from "./Intro";
import Title from "./Title";

function Content() {
  return (
    <main>
      <Flex
        direction="column"
        h="full"
      >
        <Title />
        <Intro />
        <Spacer />
      </Flex>
    </main>
  );
}

function HomePage() {
  return (
    <>
      <NavBar />
      <Content />
      <Footer />
    </>
  );
}

export default HomePage;
