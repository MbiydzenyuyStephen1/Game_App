// Code for GenreList component
// Import necessary components from Chakra UI library
import {
  Text,
  List,
  ListItem,
  HStack,
  Image,
  Spinner,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";
// Import custom hook for fetching genres and Genre type
import useGenres, { Genre } from "../hooks/useGenres";
// Import utility function for image URL manipulation
import getCroppedImageUrl from "../services/image-url";

// Define props interface for component
interface Props {
  onSelectGenre: (genre: Genre) => void; // Callback function when genre is selected
  selectedGenre: Genre | null; // Currently selected genre or null
}

// GenreList component that displays a list of game genres
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  // Use custom hook to fetch genres data
  const { data, error, isLoading } = useGenres();

  // Show loading spinner while data is being fetched
  if (isLoading) return <Spinner />;
  // Return null if there's an error
  if (error) return null;

  return (
    <>
      <List>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        {/* Map through genres data to create list items */}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              {/* Display genre thumbnail image */}
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
              {/* Genre selection button with conditional styling for selected state */}
              <Button
                textAlign="left"
                whiteSpace="normal"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;