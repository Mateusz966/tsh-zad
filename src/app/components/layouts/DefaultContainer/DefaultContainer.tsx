import {Box} from "@chakra-ui/react";
import {FC} from "react";

export const DefaultContainer:FC = ({children}) =>
  <Box marginX="auto" px="5" width={["100%", null, "44em", "58em", "76em"]}>{children}</Box>