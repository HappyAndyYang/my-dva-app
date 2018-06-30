// import { hashHistory } from 'dva/router';
// 处理异步请求
import { query } from '../services/users';

export default {
  namespace: 'users',

  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
  },

  // Quick Start 已经介绍过 subscriptions 的概念，这里不在多说
  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'query',
            payload: {},
          });
        }
      });
    },
  },

  effects: {
    *query(/* { payload } */_, { /* select, */ call, put }) {
      yield put({ type: 'showLoading' });
      const { data } = yield call(query);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.list,
            total: data.total,
            current: data.current,
          },
        });
      }
    },
    *create() { console.log('create'); },
    *delete() { console.log('delete'); },
    *update() { console.log('update'); },
  },
  reducers: {
    showLoading(state, action) {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    }, // 控制加载状态的 reducer
    showModal() {}, // 控制 Modal 显示状态的 reducer
    hideModal() {},
    // 使用静态数据返回
    querySuccess(state, action) {
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    },
    createSuccess() {},
    deleteSuccess() {},
    updateSuccess() {},
  },
};
