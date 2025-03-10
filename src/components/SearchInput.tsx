// Import necessary components from Chakra UI and React Icons
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

// Props interface defining the onSearch callback function type
interface Props {
  onSearch: (searchText: string) => void;
}

// SearchInput component that takes onSearch as a prop
const SearchInput = ({ onSearch }: Props) => {
  // Create a ref to access the input element's value
  const ref = useRef<HTMLInputElement>(null);

  return (
    // Form wrapper that handles the search submission
    <form
      style={{ width: "100%" }}
      onSubmit={(event) => {
        event.preventDefault(); // Prevent default form submission
        if (ref.current) onSearch(ref.current.value); // Call onSearch with input value
      }}
    >
      {/* InputGroup provides a wrapper for input and its associated elements */}
      <InputGroup>
        {/* InputLeftElement adds a search icon to the left side of the input */}
        <InputLeftElement children={<BsSearch />} />
        {/* Input field with styling and placeholder */}
        <Input
          ref={ref}
          borderRadius={20}
          variant={"filled"}
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
