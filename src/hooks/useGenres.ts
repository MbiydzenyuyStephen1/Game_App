
import genres from "../data/genres"

export interface Genre {
  id: number;
  name: string;
} 


const useGenres = () => ({data: genres, isLoading: false, error: null})
         
  
export default useGenres;
