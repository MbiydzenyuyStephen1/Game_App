// import { Text, List, ListItem, HStack } from "@chakra-ui/react";
// import useGenres from "../hooks/useGenres";
// import getCroppedImageUrl from "../services/image-url";

// const GenreList = () => {
//   const { data } = useGenres();

//   return (
//     <>
//       <List>
//         {data.map((genre) => (
//           <ListItem key={genre.id}>
//             <HStack>
//               <Image
//                 boxSize="32px"
//                 borderRadius={8}
//                 src={getCroppedImageUrl(genre.image_background)}
//               />
//               <Text>{genre.name}</Text>
//             </HStack>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default GenreList;

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
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;

  return (
    <>
      <List>
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
              />
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
