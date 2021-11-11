import {
  ReactElement,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import {LoginRes, useUser} from "../shared/useUser";
type UserProviderProps = { children: ReactNode };

type UserState = {
  user: LoginRes | undefined
};

type UserDispatch = {
  setUser: Dispatch<SetStateAction<LoginRes | undefined>>;
  logout: () => void;
};

const UserContext = createContext<UserState | undefined>(undefined);
const UserDispatchContext = createContext<UserDispatch | undefined>(undefined);

const UserProvider = ({ children }: UserProviderProps): ReactElement => {

  const { user, setUser, logout } = useUser();

  return (
    <UserContext.Provider value={{ user }}>
      <UserDispatchContext.Provider value={{ setUser, logout }}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const userContext = useContext(UserContext);
  const userDispatchContext = useContext(UserDispatchContext);
  if (userContext === undefined || userDispatchContext === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return { userContext, userDispatchContext };
};

export { UserProvider, useUserContext };
