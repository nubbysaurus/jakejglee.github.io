import {
  Box,
  Flex
} from "@chakra-ui/react";

import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";

import Intro from "./Intro";
import Title from "./Title";

function Content() {
  return (
    <main>
      <Title />
      <Intro />
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
