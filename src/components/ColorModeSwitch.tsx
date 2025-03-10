 // Import necessary components and hooks from Chakra UI
 import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
 
 // ColorModeSwitch component for toggling between light and dark modes
 const ColorModeSwitch = () => {
   // Use the useColorMode hook to access color mode state and toggle function
   const { toggleColorMode, colorMode } = useColorMode();
 
   return (
     // HStack arranges children horizontally with consistent spacing
     <HStack>
       {/* Switch component that toggles between light/dark modes
           - colorScheme sets the color theme when active
           - isChecked binds the switch state to the current color mode
           - onChange handles the toggle functionality */}
       <Switch colorScheme="green" isChecked={colorMode === "dark"} onChange={toggleColorMode} />
       {/* Text label with nowrap to prevent line breaks */}
       <Text whiteSpace='nowrap'>Dark Mode</Text>
     </HStack>
   );
 };
 
 export default ColorModeSwitch;
 