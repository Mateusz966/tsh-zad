import React, {FC, ReactNode, useState} from "react";
import {Box, Button, Flex} from "@chakra-ui/react";
import {useUserContext} from "../../../../providers/UserProvider";


interface Props {
  headerContent: ReactNode;
}

export const UserDropdown: FC<Props> = ({headerContent}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const { userDispatchContext: { logout }} = useUserContext();

  return (
      <Box position="relative">
        <Flex onClick={toggling}>
          {headerContent}
        </Flex>
        {isOpen && (
            <Flex  position="absolute" width="180px" right="0" as="ul">
             <Flex w="100%" as="li">
               <Button variant="listElement" onClick={logout}>
                 Logout
               </Button>
             </Flex>
            </Flex>
        )}
      </Box>
  );
}