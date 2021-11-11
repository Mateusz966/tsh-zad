import {Text} from "@chakra-ui/react";
import {useUserContext} from "../../../../providers/UserProvider";

export const UserAvatarDropdown = () => {
  const { userContext: { user }, userDispatchContext: { logout  } } = useUserContext();
  return (
    <Text>
      FUTURE DD {user?.user.username}
    </Text>
  )
}