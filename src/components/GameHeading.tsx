// Import necessary components and types from Chakra UI and App
import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

// Define Props interface that requires gameQuery of type GameQuery
interface Props{
    gameQuery: GameQuery
}

// GameHeading component that displays a dynamic heading based on selected platform and genre
const GameHeading = ({ gameQuery}: Props) => {
    // Create heading string using optional chaining (?.) to safely access nested properties
    // If platform or genre is not selected, empty string is used as fallback
    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || '' } Games`;

  return (
    <>
   {/* Render heading with Chakra UI styling - h1 element with margin and font size */}
   <Heading as='h1' marginY={5} fontSize='5xl'>
    {heading}
   </Heading>
    </>
  );
};

export default GameHeading;
