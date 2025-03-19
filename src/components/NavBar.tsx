// // Import necessary components from Chakra UI and local files
// import { HStack, Image } from "@chakra-ui/react";
// import Logo from "../assets/logo.webp";
// import ColorModeSwitch from "./ColorModeSwitch";
// import SearchInput from "./SearchInput";

// // Define Props interface for NavBar component
// // onSearch is a function that takes a string parameter and returns void
// interface Props {
//   onSearch: (searchText: string) => void;
// }

// // NavBar component that accepts onSearch prop using destructuring
// const NavBar = ({ onSearch }: Props) => {
//   return (
//     // HStack is a horizontal stack container from Chakra UI
//     // Adds padding of 10px around the container
//     <HStack padding="10px">
//       {/* Display logo image with fixed size of 60px */}
//       <Image src={Logo} boxSize="60px" />
//       {/* SearchInput component that handles search functionality */}
//       <SearchInput onSearch={onSearch} />
//       {/* ColorModeSwitch component for toggling dark/light mode */}
//       <ColorModeSwitch />
//     </HStack>
//   );
// };

// export default NavBar;
