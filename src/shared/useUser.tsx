import {Dispatch, SetStateAction, useState} from "react";
import {cHistory} from "../config/history";

export type LoginRes = {
  user: {
    id: number,
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
    cHistory.push('/login')
  }

  return {
    user,
    setUser,
    logout,
  }
}