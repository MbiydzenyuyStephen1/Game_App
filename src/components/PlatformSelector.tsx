// Import necessary components from Chakra UI library for creating dropdown menu
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// Import chevron down icon from react-icons
import { BsChevronDown } from "react-icons/bs";
// Import custom hook for fetching platform data
import usePlatforms from "../hooks/usePlatforms";
// Import Platform type definition
import { Platform } from "../hooks/useGames";

// Define props interface for component
interface Props {
  onSelectPlatform: (platform: Platform) => void; // Callback function when platform is selected
  selectedPlatform: Platform | null; // Currently selected platform or null
}

// PlatformSelector component that displays a dropdown menu of gaming platforms
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  // Use custom hook to fetch platforms data and handle error states
  const { data, error } = usePlatforms();

  // If there's an error fetching platforms, don't render anything
  if (error) return null;

  return (
    // Chakra UI Menu component for dropdown functionality
    <Menu>
      {/* Button that triggers the dropdown, displays selected platform name or "Platforms" */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      {/* List of platform options */}
      <MenuList>
        {data.map((platform) => (
          // MenuItem for each platform, calls onSelectPlatform when clicked
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
