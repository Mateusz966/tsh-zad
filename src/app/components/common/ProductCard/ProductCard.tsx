import {Box, Button, GridItem, IconButton} from "@chakra-ui/react";
import {FC} from "react";
import {CardDescription, CardHeading, CardLabel, CardPhoto} from "../Card/Card";
import {EmptyStar, FillStar} from "../../../../assets/Stars";


const StarRating = ({rating}: any) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <IconButton
            aria-label="start-rating"
            type="button"
            key={index}
            isActive={index <= rating}
            variant="star"
            icon={index <= rating ? <FillStar /> : <EmptyStar />}
            mb={1}
          >
            <span className="star">&#9733;</span>
          </IconButton>
        );
      })}
    </div>
  );
};



export interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
  promo: boolean;
  active: boolean;
  rating: number
}

export const ProductCard: FC<ProductCardProps> = ({
    active,
    name,
    image,
    description,
    id,
    promo,
    rating,
}) => (
  <GridItem pos="relative" borderRadius="md" key={id} mb={2}>
    <CardPhoto image={image} />
    {  promo && (
     <CardLabel>
       Promo
     </CardLabel>
    ) }
    <Box pt={4} pb={6} bg="#fff" px="4">
      <CardHeading name={name} />
      <CardDescription description={description} />
      <StarRating rating={rating} />
      <Button isDisabled={!active}>
        {active ? 'Show details' : 'Unavailable'}
      </Button>
    </Box>
  </GridItem>
)