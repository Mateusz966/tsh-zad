import {Box} from "@chakra-ui/react";
import {FC} from "react";

export const DefaultContainer:FC = ({children}) =>
  <Box marginX="auto" width={["100%", "26em", "44em", "58em", "76em"]}>{children}</Box>