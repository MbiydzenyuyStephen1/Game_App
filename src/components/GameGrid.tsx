// Import necessary components and hooks from Chakra UI and custom hooks
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

// Props interface defining the expected properties
interface Props {
  gameQuery: GameQuery;
}

// GameGrid component that displays a grid of games based on the query
const GameGrid = ({ gameQuery }: Props) => {
  // Fetch games data using custom hook, which returns loading state, error state, and games data
  const { data, error, isLoading } = useGames( gameQuery );
  // Array for rendering loading skeleton placeholders
  const skeletons = [1, 2, 3, 4, 5, 6];

  // Show error message if there's an error fetching data
  if (error) return <Text>{error}</Text>;

  return (
    <>
      {/* Display error message if there's an error */}
      {error && <Text>{error}</Text>}
      {/* Responsive grid layout with different columns for different screen sizes */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {/* Show loading skeletons while data is being fetched */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {/* Map through games data and render game cards */}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;