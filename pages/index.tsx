import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
  Stack,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import LoathersGridItem from "../components/LoathersGridItem";

const Home: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack>
      <HStack minWidth="max-content" alignSelf={"center"}>
        <Heading>Loathers Dashboard</Heading>
        <Spacer />
        <IconButton
          position={"fixed"}
          right={1}
          aria-label="toggle color mode"
          onClick={toggleColorMode}
          icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
        />
      </HStack>
      <Grid gap={10} minWidth="fit-content">
        <GridItem>
          <LoathersGridItem
            scriptName="garbage-collector"
            runScript="garbo"
            image="garbo_logo.png"
          />
        </GridItem>
      </Grid>
    </VStack>
  );
};

export default Home;
