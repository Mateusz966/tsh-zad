import {FC} from "react";
import {GridItem, Grid} from "@chakra-ui/react";

export const Splitted: FC = ({children}) => (
  <Grid>
    <GridItem>
      photo
    </GridItem>
    <GridItem>
      {children}
    </GridItem>
  </Grid>
);