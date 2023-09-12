// Title.tsx
import Image from "next/image";
import {
  Box,
  Heading
} from "@chakra-ui/react";

import jakePic01 from "../../imgs/jake-01.jpg";

function Title() {
  return (
    <Box
      align="center"
    >
      <Image
        alt="Jake"
        src={jakePic01}
      />
      <Heading>
        Jake Lee
      </Heading>
    </Box>
  );
}

export default Title;
