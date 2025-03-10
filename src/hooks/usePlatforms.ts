import useData from "./useData";

// Define the Platform interface that specifies the shape of platform data
interface Platform {
    id: number;        // Unique identifier for the platform
    name: string;      // Display name of the platform
    slug:string;       // URL-friendly version of the platform name
}

// Custom hook that fetches platform data from the API
// Uses useData hook and specifies Platform as the generic type
// The endpoint '/platforms/lists/parents' returns a list of parent platforms
const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;
