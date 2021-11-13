import {Flex, Text} from "@chakra-ui/react";
import {EmptyBag} from "../../../../assets/EmptyBag";

export const EmptyList = () => (
  <Flex borderRadius="md" mt="3rem" bg="#fff" alignItems="center" justifyContent="center" flexDir="column" mx="auto" maxW="600px" width="100%" height="344px">
    <EmptyBag mb="4" />
    <Text color="shadows.900" fontSize="xl" textAlign="center" w="100%">
      Ooops... It's empty here
    </Text>
    <Text color="shadows.400" fontSize="sm" textAlign="center" w="100%">
      There are no products on the list
    </Text>
  </Flex>
);