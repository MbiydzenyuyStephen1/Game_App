  import genres from "../data/genres"

  // Define Genre interface for type safety
  // Each genre has a numeric id and string name
  export interface Genre {
    id: number;
    name: string;
  } 

  // Custom hook that returns genres data
  // Returns an object with:
  // - data: array of genres
  // - isLoading: false since data is local
  // - error: null since no API calls are made
  const useGenres = () => ({data: genres, isLoading: false, error: null})
         
  
  export default useGenres;
