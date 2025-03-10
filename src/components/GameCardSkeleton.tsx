// Import necessary components from Chakra UI library
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

// GameCardSkeleton component - displays a loading placeholder for game cards
const GameCardSkeleton = () => {
  return (
    <>
    {/* Card container with fixed width */}
    <Card width="300px">
      {/* Skeleton wrapper with rounded corners and fixed height */}
      <Skeleton borderRadius={10} overflow="hidden" height="200px">
        <CardBody>
            {/* Animated loading text placeholder */}
            <SkeletonText />
        </CardBody>
      </Skeleton>
    </Card>
    </>
  );
};

export default GameCardSkeleton;