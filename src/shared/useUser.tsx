import {Dispatch, SetStateAction, useState} from "react";

export type LoginRes = {
  user: {
    id: 0,
    username: string,
    avatar: string
  },
  expiresIn: string,
  access_token: string,
}

interface UseUser {
  user: LoginRes | undefined;
  setUser: Dispatch<SetStateAction<LoginRes | undefined>>;
  logout: () => void;
}

export const useUser = (): UseUser => {
  const [user, setUser] = useState<LoginRes>();

  const logout = () => {
    setUser(undefined);
  }

  return {
    user,
    setUser,
    logout,
  }
}