import React, { useState } from 'react';
import PreloaderLine from '@components/PreloaderLine';
import PreloaderSkeleton from '@components/PreloaderSkeleton';
import Header from '@components/Header';
import cn from './WorkPreview.scss';

function WorkPreview() {
  const [loading, setLoading] = useState(true);

  function handleIframeLoad() {
    setLoading(false);
  }

  return (
    <>
      <Header border />
      {loading && <PreloaderLine />}
      {loading && <PreloaderSkeleton />}
      <iframe
        title='webinar fifnance'
        // src='https://iamrealmarsel.github.io/webinar-finance/'
        src='/work/amarkets-africa/'
        onLoad={handleIframeLoad}
        className={`${cn.preview} ${loading ? cn.hidden : ''}`}
      ></iframe>
    </>
  );
}

export default WorkPreview;
