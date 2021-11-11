import {FC} from "react";
import {GridItem, Grid, Image, Flex} from "@chakra-ui/react";

interface Props {
  src: string;
}

export const Splitted: FC<Props> = ({src, children}) => (
  <Grid
    height="100vh"
    gridTemplateColumns={["1fr", null, null, "40% 1fr"]}
  >
    <GridItem d={['none', null, null, 'block']} overflow="hidden">
      <Image height="100%" objectFit="cover" width="100%" src={src} alt="Login Photo" />
    </GridItem>
    <Flex flexDir="column" justifyContent="center" maxWidth="500px" width="100%" mx="auto" px="5">
      {children}
    </Flex>
  </Grid>
);