import {Grid} from "@chakra-ui/react";
import {FC} from "react";
import {DefaultContainer} from "../DefaultContainer/DefaultContainer";

export const ProductHeaderLayout:FC = ({children}) => {
  return (
    <DefaultContainer>
    <Grid
     gridTemplateColumns="200px 500px 1fr"
    >
      {children}
    </Grid>
    </DefaultContainer>
  )
}