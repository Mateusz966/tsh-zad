import {FC} from "react";
import {Box, Grid} from "@chakra-ui/react";
import {DefaultContainer} from "../DefaultContainer/DefaultContainer";

export const ProductsGrid: FC = ({children}) => (
  <Box as="main" bg="#f2f2f2">
    <DefaultContainer>
    <Grid
      data-testid="products-wrapper"
      paddingY="40px"
      gap={6}
      gridTemplateColumns={["repeat(auto-fit, 100%)", null, null, "repeat(auto-fit,  280px)"]}
      gridTemplateRows="1fr"
    >
      {children}
    </Grid>
    </DefaultContainer>
  </Box>
);