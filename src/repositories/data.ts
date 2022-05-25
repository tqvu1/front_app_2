import axios from '../libs/axios';
import { QueryFunctionContext } from 'react-query';

const getData = (args: QueryFunctionContext<any>) => {
  const [url, params] = args.queryKey;
  return axios({
    method: 'get',
    url,
    params,
  });
};

export default {
  getData,
}
