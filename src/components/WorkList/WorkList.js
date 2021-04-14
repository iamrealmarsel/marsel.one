import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WorkList.scss';

function WorkList() {
  return (
    <div className={styles.workList}>
      <Link className={styles.workItem} to='/work-preview'>
        <img src='img/case1.png' alt='' />
      </Link>
      <Link className={styles.workItem} to='/work-preview'>
        <img src='img/case2.png' alt='' />
      </Link>
      <Link className={styles.workItem} to='/work-preview'>
        <img src='img/case1.png' alt='' />
      </Link>
      <Link className={styles.workItem} to='/work-preview'>
        <img src='img/case2.png' alt='' />
      </Link>
      <Link className={styles.workItem} to='/work-preview'>
        <img src='img/case1.png' alt='' />
      </Link>
    </div>
  );
}

export default WorkList;
