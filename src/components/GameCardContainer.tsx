// Import necessary components and types from Chakra UI and React
import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

// Define Props interface for component type checking
interface Props {
  children: ReactNode;
}

// GameCardContainer component that wraps child elements in a styled container
// Props:
// - children: ReactNode - The content to be rendered inside the container
const GameCardContainer = ({ children }: Props) => {
  return (
    // Box component from Chakra UI acts as a container
    // borderRadius adds rounded corners
    // overflow="hidden" ensures content doesn't spill outside rounded corners
    <Box  borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
