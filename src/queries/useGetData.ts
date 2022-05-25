import { useQuery } from "react-query";
import useQueryUrl from "../hooks/useQueryUrl";
import {AxiosError, AxiosResponse} from "axios";
import dataRepo from '../repositories/data';

const useGetData = () => {
  const apiPath = '/user';
  const defaultKey = [apiPath, 1, 'test'];
  const params = useQueryUrl<{ param1: string; param2: string }>();

  const queryGetData = useQuery<
    AxiosResponse<any>,
    AxiosError<any>
    >({
    queryKey: [...defaultKey, params],
    queryFn: dataRepo.getData,
  });
  return {
    queryGetData
  }
}

export default useGetData;