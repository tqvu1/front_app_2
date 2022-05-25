import { useQuery } from "react-query";
import useQueryUrl from "../hooks/useQueryUrl";
import {AxiosError, AxiosResponse} from "axios";
import dataRepo from '../repositories/data';

const useGetData = () => {
  const apiPath = '/help_me';
  const params = useQueryUrl<{ param1: string; param2: string }>();

  const queryGetData = useQuery<
    AxiosResponse<any>,
    AxiosError<any>
    >({
    queryKey: [apiPath, params],
    queryFn: dataRepo.getData,
  });

  return {
    queryGetData
  }
}

export default useGetData;