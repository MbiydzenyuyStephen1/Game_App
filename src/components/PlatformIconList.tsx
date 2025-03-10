// Import necessary icons from react-icons library for different platforms
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
// Import Chakra UI components for layout and styling
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

// Props interface defining the expected platform array input
interface Props {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Props) => {
  // Map platform slugs to their corresponding icon components
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  // Render a horizontal stack of platform icons
  return (
    <HStack marginY={1}>
      {/* Map through each platform and render its corresponding icon */}
      {platform.map((platform: Platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;