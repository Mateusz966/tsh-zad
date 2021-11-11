import {Button, Flex, Text} from "@chakra-ui/react";
import {useUserContext} from "../../../../providers/UserProvider";

export const UserAvatarDropdown = () => {
  const { userContext: { user: userData }, userDispatchContext: { logout  } } = useUserContext();

  return (
    <Flex ml="auto" justifyContent="flexEnd">
      {userData?.user ? (<Text>{userData.user?.username}</Text> ) : <Button variant="reverse">Log In</Button>}
    </Flex>
  )
}