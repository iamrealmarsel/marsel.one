import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tags.scss';

const cx = classNames.bind(styles);

function Tags() {
  return (
    <div className={cx('tags')}>
      <span className={cx('tag')}>landing page</span>
      <span className={cx('tag')}>webpack</span>
      <span className={cx('tag')}>react</span>
    </div>
  );
}

export default Tags;
