import {FC} from "react";
import {GridItem, Grid, Image} from "@chakra-ui/react";

interface Props {
  src: string;
}

export const Splitted: FC<Props> = ({src, children}) => (
  <Grid>
    <GridItem>
      <Image src={src} alt="Login Photo" />
    </GridItem>
    <GridItem>
      {children}
    </GridItem>
  </Grid>
);