import { DownloadIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  GridItem,
  IconButton,
  Image,
  VStack,
} from "@chakra-ui/react";
import { PlayArrow } from "@mui/icons-material";
import { cliExecute, gitExists } from "kolmafia";

interface LoathersProps {
  scriptName: string;
  image: string;
  runScript?: string;
  relayLink?: string;
}

const LoathersGridItem: React.FC<LoathersProps> = ({
  scriptName,
  image,
  runScript,
}) => {
  const installed = gitExists(scriptName);
  const installButton = () => {
    cliExecute(`git checkout loathers/${scriptName}`);
  };
  const playButton = () => {
    cliExecute(runScript!);
  };

  return (
    <GridItem>
      <VStack>
        <Image src={`/images/relayimages/loathers-dashboard/${image}`} />
        <ButtonGroup gap={2}>
          {!installed && (
            <IconButton
              onClick={installButton}
              aria-label="download button"
              icon={<DownloadIcon />}
            />
          )}
          {runScript !== undefined && installed && (
            <IconButton
              onClick={playButton}
              aria-label="run button"
              icon={<PlayArrow />}
            />
          )}
        </ButtonGroup>
      </VStack>
    </GridItem>
  );
};

export default LoathersGridItem;
