import { delay } from 'roadhog-api-doc';
import { data } from './mock/users';

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';

const proxy = {
  'GET /api/users': data,
}

export default noProxy ? {} : delay(proxy, 1000);
