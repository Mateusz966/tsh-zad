import {Spinner} from "@chakra-ui/react";


export const AppSpinner = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="main"
      size="xl"
    />
  )
}