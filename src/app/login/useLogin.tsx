import {useApi} from "../../services/api";
import {useForm, UseFormReturn} from "react-hook-form";
import {errorNotification, successNotification} from "../components/common/Notification/Notification";
import { zodResolver } from '@hookform/resolvers/zod';
import {loginSchema} from "../components/formSchema/login";
import {cHistory} from "../../config/history";
import {LoginRes} from "../../shared/useUser";
import {useUserContext} from "../../providers/UserProvider";


type FormValues = {
  username: string;
  password: string;
}

interface UseLogin {
 handleSubmit: (data: LoginReq) => Promise<void>;
 methods: UseFormReturn<FormValues, Record<string, string>>;
 inProgress: boolean;
}

type LoginReq = {
  username: string;
  password: string;
}


export const useLogin = (): UseLogin => {
  const { post, inProgress } = useApi();
  const { userDispatchContext: { setUser } } = useUserContext();
  const methods = useForm<FormValues>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema)
  });

  const handleSubmit = async (data: LoginReq) => {
    const res = await logIn(data);
    if (res) handleSuccess(res);
    else errorHandler();
  }

  const logIn = async (data: LoginReq) => {
    return post<LoginReq, LoginRes>('/users/login', data);
  }

  const handleSuccess = (res: LoginRes) => {
    setUser(res);
    successNotification('Logged in');
    cHistory.push('/products');
  }

  const errorHandler = () => {
  errorNotification('Invalid credentials')
  }


  return {
    handleSubmit,
    inProgress,
    methods,
  }

}