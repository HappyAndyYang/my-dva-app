import React from 'react';
import { Button } from 'antd';
import styles from './UserSearch.less';

// export default () => (
//   <div>
// user search
//   </div>
// );

function UserSearch({
  /* form, field, keyword,
  onSearch, */
  onAdd,
}) {
  return (
    <div className={styles.normal}>
      <div className={styles.search}>
        ...
      </div>
      <div className={styles.create}>
        <Button type="ghost" onClick={onAdd}>
          添加
        </Button>
      </div>
    </div>
  );
}

export default UserSearch;
