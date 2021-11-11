import {Grid} from "@chakra-ui/react";
import {FC} from "react";
import {DefaultContainer} from "../DefaultContainer/DefaultContainer";

export const ProductHeaderLayout:FC = ({children}) => {
  return (
    <DefaultContainer>
    <Grid
     gridTemplateColumns={["1fr 1fr", null , null, "200px 1fr 90px"]}
     gridTemplateRows={["1fr 1fr", null, null, "1fr"]}
     alignItems="center"
    >
      {children}
    </Grid>
    </DefaultContainer>
  )
}