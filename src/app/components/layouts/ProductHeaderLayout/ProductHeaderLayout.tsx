import {Box, Grid} from "@chakra-ui/react";
import {FC} from "react";
import {DefaultContainer} from "../DefaultContainer/DefaultContainer";

export const ProductHeaderLayout:FC = ({children}) => {
  return (
    <Box as="header" bg="#fff">
      <DefaultContainer>
        <Grid
        gridTemplateColumns={["1fr 1fr", null , null, "150px 1fr 90px", "200px 1fr 90px"]}
        gridTemplateRows={["1fr 1fr", null, null, "1fr"]}
        alignItems="center"
        pb={[4, null, null, 6]}
        pt={[0, null, null, 6]}
        >
          {children}
        </Grid>
      </DefaultContainer>
    </Box>
  )
}