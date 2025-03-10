// Import necessary dependencies from React and Chakra UI
import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

// Define the Props interface that specifies the game object type
interface Props {
  game: Game;
}

// GameCard component that displays game information in a card format
const GameCard = ({ game }: Props) => {
  return (
    // Card container with fixed width and rounded corners
    <Card width="300px" borderRadius={10} overflow="hidden">
      {/* Game background image, cropped using utility function */}
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        {/* Horizontal stack for platform icons and critic score */}
        <HStack justifyContent="space-between" marginBottom={3}>
          {/* Display platform icons based on game platforms */}
          <PlatformIconList platform={game.parent_platforms.map((p) => p.platform)} />
          {/* Display metacritic score */}
          <CriticScore score={game.metacritic} />
        </HStack>
        {/* Game title with emoji rating */}
        <Heading fontSize="2xl">
          {game.name} <Emoji rating={game.rating} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;