import {Box, Flex} from "@chakra-ui/react";
import {FC} from "react";

export const FormContainer: FC = ({children}) => (
  <Flex
   flexDir="column"
   flexWrap="wrap"
   mt={["80px", null, null, "auto"]}
   mb="auto"
  >
    {children}
  </Flex>
)