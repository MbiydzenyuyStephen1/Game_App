// Import necessary dependencies from axios and react
import { AxiosRequestConfig, CanceledError } from 'axios';
import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

// Define the structure of the API response
interface FetchResponse<T> {
  count: number;
  results: T[];
}

// Generic hook for fetching data from API
// T: Type of data being fetched
// endpoint: API endpoint to fetch from
// requestConfig: Optional axios configuration
// deps: Optional dependencies array for useEffect
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
      // State management for data, error and loading status
      const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
          // Create AbortController for canceling requests
          const controller = new AbortController();  
  
          setLoading(true);
        apiClient
          // Make GET request with type safety using FetchResponse interface
          .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
          .then((res) => {
            setData(res.data.results)
            setLoading(false)}
        )
          .catch((err) => {
              // Ignore if error is due to request cancellation
              if (err instanceof CanceledError) return;
              setError(err.message)
              setLoading(false);
      });
  
          // Cleanup function to abort request when component unmounts
          return () => controller.abort();
      }, deps? [...deps] : []); // Re-run effect when dependencies change
  
      // Return data, error and loading state
      return { data, error, isLoading };
  }
  
export default useData;