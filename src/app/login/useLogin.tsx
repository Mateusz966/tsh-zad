import {useApi} from "../../services/api";
import {useForm, UseFormReturn} from "react-hook-form";
import {successNotification} from "../components/common/Notification/Notification";
import { zodResolver } from '@hookform/resolvers/zod';
import {loginSchema} from "../components/formSchema/login";
import {cHistory} from "../../config/history";


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

type LoginRes = {
  "user": {
    "id": 0,
    "username": string,
    "avatar": string
  },
  "expiresIn": string,
  "access_token": string
}


export const useLogin = (): UseLogin => {
  const { post, inProgress } = useApi();
  const methods = useForm<FormValues>({
    delayError: 1000,
    mode: 'onChange',
    resolver: zodResolver(loginSchema)
  });

  //TODO API RETURN 404 CHECK LATER

  const handleSubmit = async (data: LoginReq) => {
    const res = await logIn(data);
    if (res) handleSuccess();
  }

  const logIn = async (data: LoginReq) => {
    return post<LoginReq, LoginRes>('/users/login', data);
  }

  const handleSuccess = () => {
   successNotification('Zalogowano');
   cHistory.push('/products');
  }


  return {
    handleSubmit,
    inProgress,
    methods,
  }

}