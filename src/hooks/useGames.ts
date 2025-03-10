// Import custom hook for fetching data and required interfaces
import useData from './useData';
import { Genre } from './useGenres';
import { GameQuery } from "../App";

// Interface defining the structure of a gaming platform
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// Interface defining the structure of a game object
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]; // Array of platforms the game is available on
    metacritic: number; // Metacritic review score
    rating: number; // User rating score
  }

// Custom hook for fetching games based on query parameters
const useGames = (
  gameQuery: GameQuery
) =>
     useData<Game>('/games', // Endpoint for fetching games
      {params: {
        genres: gameQuery.genre?.id, // Filter by genre ID
        platforms: gameQuery.platform?.id, // Filter by platform ID
        sortOrder: gameQuery.sortOrder, // Sort games by specified order
        search: gameQuery.searchText // Filter games by search text
      }},
      [gameQuery]) // Dependency array for re-fetching when query changes

export default useGames