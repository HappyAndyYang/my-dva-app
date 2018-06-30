import React from 'react';
import { connect } from 'dva'; // 引入connect工具
// import { PropTypes } from 'prop-types';

import UserList from '../../components/users/UserList';
import UserSearch from '../../components/users/UserSearch';
import UserModal from '../../components/users/UserModal';
import styles from './Users.less';

function Users({ /* location, dispatch, */ users }) {
  const {
    loading, list, total, current, /* currentItem, modalVisible, modalType, */
  } = users;
  const userSearchProps = {};
  const userListProps = {
    total,
    current,
    loading,
    dataSource: list,
  };
  const userModalProps = {};
  return (
    <div className={styles.normal}>
      {/* 用户筛选搜索框 */}
      <UserSearch {...userSearchProps} />
      {/* 用户信息展示列表 */}
      <UserList {...userListProps} />
      {/* 添加用户 & 修改用户弹出的复层 */}
      <UserModal {...userModalProps} />
    </div>
  );
}
// Users.propTypes = {
//   users: PropTypes.object,
// }

// 指定订阅数据，这里关联了users
function mapStateToProps({ users }) {
  return { users };
}
export default connect(mapStateToProps)(Users);
