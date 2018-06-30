import qs from 'qs';
import request from '../utils/request';

export async function query(params) {
  console.log(1111);
  return request(`/api/users?${qs.stringify(params)}`);
}
