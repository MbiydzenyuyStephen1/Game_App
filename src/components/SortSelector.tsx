// Import necessary components from Chakra UI library and react-icons
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

// Define the Props interface for type checking
interface Props {
  onSelectSortOrder: (sortOrder: string) => void; // Callback function to handle sort order selection
  selectedSortOrder: string; // Currently selected sort order
  sortOrder: string; // Current sort order value
}

// SortSelector component that displays a dropdown menu for sorting options
const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  // Array of sorting options with their values and display labels
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // Find the current sort order object based on the sortOrder prop
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    // Chakra UI Menu component for dropdown functionality
    <Menu>
      {/* Button that triggers the dropdown menu */}
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      {/* List of menu items */}
      <MenuList>
        {/* Map through sort orders to create menu items */}
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;