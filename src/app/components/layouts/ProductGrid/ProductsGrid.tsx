import {FC} from "react";
import {Box, Grid} from "@chakra-ui/react";
import {DefaultContainer} from "../DefaultContainer/DefaultContainer";

export const ProductsGrid: FC = ({children}) => (
  <Box bg="#f2f2f2">
    <DefaultContainer>
    <Grid
      paddingY="40px"
      gap={6}
      gridTemplateColumns="repeat(auto-fit, minmax(284px, 1fr))"
      gridTemplateRows="1fr"
    >
      {children}
    </Grid>
    </DefaultContainer>
  </Box>
);