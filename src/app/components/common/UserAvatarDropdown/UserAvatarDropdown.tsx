import {Button, Flex, Text} from "@chakra-ui/react";
import {useUserContext} from "../../../../providers/UserProvider";
import {cHistory} from "../../../../config/history";
import {UserDropdown} from "../Dropdown/Dropdown";

export const UserAvatarDropdown = () => {
  const { userContext: { user: userData }, userDispatchContext: { logout  } } = useUserContext();

  return (
    <Flex w="90px" ml="auto" justifyContent="flexEnd">
      {userData?.user ? <UserDropdown headerContent={<Text cursor="pointer"> Hello, {userData.user.username} </Text>} /> : <Button py="5" data-testid="redirect-to-login" onClick={() => cHistory.push('/login')} variant="reverse">Log In</Button>}
    </Flex>
  )
}