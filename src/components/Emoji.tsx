// Import image assets and Chakra UI components
import bullEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

// Define props interface for the component
interface Props {
  rating: number;
}

// Emoji component that displays different emojis based on rating
const Emoji = ({ rating }: Props) => {
  // Map of rating numbers to their corresponding emoji image properties
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: '25px' },
    4: { src: thumbsUp, alt: 'recommended', boxSize: '25px' },
    5: { src: bullEye, alt: 'exceptional', boxSize: '35px' }
  };

  // Return null if rating is less than 3
  if (rating < 3) return null;

  // Render the emoji image with properties spread from emojiMap
  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  );
};

export default Emoji;