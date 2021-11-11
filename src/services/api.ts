import {apiUrl} from "../config/apiUrl";
import {useState} from "react";

interface UseApi {
  post: <T, K = void>(path: string, data: T) => Promise<K>;
  inProgress: boolean;
}

export const useApi = (): UseApi => {
  const [inProgress, setInProgress] = useState(false);
  const post = async <T, K = void>(path: string, data: T): Promise<K> => {
    setInProgress(true)
    return await fetch(`${apiUrl}${path}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }).then((res) => res.json())
      .catch((err) => console.error(err))
      .finally(() => setInProgress(false));
  }

  return {
    post,
    inProgress,
  }

}
