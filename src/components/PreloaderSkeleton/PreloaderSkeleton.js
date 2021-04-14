import React from 'react';
import classNames from 'classnames/bind';
import styles from './PreloaderSkeleton.scss';

const cn = classNames.bind(styles);

function PreloaderSkeleton() {
  return (
    <>
      <div className={cn('container')}>
        <div className={cn('section1')}>
          <div className={cn('banner')}></div>
        </div>
        <div className={cn('section2')}>
          <div className={cn('title')}></div>
          <div className={cn('advantageList')}>
            <div className={cn('advantageItem')}>
              <div className={cn('iconWrapper')}>
                <div className={cn('icon')}></div>
              </div>
              <div className={cn('desc')}>
                <div className={cn('caption')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
              </div>
            </div>
            <div className={cn('advantageItem')}>
              <div className={cn('iconWrapper')}>
                <div className={cn('icon')}></div>
              </div>
              <div className={cn('desc')}>
                <div className={cn('caption')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
              </div>
            </div>
            <div className={cn('advantageItem')}>
              <div className={cn('iconWrapper')}>
                <div className={cn('icon')}></div>
              </div>
              <div className={cn('desc')}>
                <div className={cn('caption')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
              </div>
            </div>
            <div className={cn('advantageItem')}>
              <div className={cn('iconWrapper')}>
                <div className={cn('icon')}></div>
              </div>
              <div className={cn('desc')}>
                <div className={cn('caption')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
              </div>
            </div>
            <div className={cn('advantageItem')}>
              <div className={cn('iconWrapper')}>
                <div className={cn('icon')}></div>
              </div>
              <div className={cn('desc')}>
                <div className={cn('caption')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
              </div>
            </div>
            <div className={cn('advantageItem')}>
              <div className={cn('iconWrapper')}>
                <div className={cn('icon')}></div>
              </div>
              <div className={cn('desc')}>
                <div className={cn('caption')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn('section3')}>
          <div className={cn('title')}></div>
          <div className={cn('section3Row')}>
            <div className={cn('section3Col1')}>
              <div className={cn('image')}></div>
            </div>
            <div className={cn('section3Col2')}>
              <div className={cn('textWrapper')}>
                <div className={cn('caption')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
                <div className={cn('text')}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreloaderSkeleton;
