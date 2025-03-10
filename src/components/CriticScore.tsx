// Import Badge component from Chakra UI library
import { Badge } from '@chakra-ui/react';

// Define Props interface with score property of type number
interface Props {
  score: number;
}

// CriticScore component that takes a score prop and displays it with color-coded badge
const CriticScore = ({ score }: Props) => {
    // Determine badge color based on score thresholds
    // Green for scores > 75
    // Yellow for scores > 60
    // Red for scores <= 60
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';

  return (
    // Render Chakra UI Badge component with dynamic color scheme
    // Set consistent font size, padding and border radius
    <Badge colorScheme={color} fontSize='14px' padding={1} borderRadius='4px'>{score}</Badge>
  )
}

export default CriticScore; 