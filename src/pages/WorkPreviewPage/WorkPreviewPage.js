import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PreloaderLine from '@components/PreloaderLine';
import PreloaderSkeleton from '@components/PreloaderSkeleton';
import Header from '@components/Header';
import cn from './WorkPreviewPage.scss';

function WorkPreviewPage({ srcFrame, urlGithub }) {
  const [loading, setLoading] = useState(true);

  function handleIframeLoad() {
    setLoading(false);
  }

  return (
    <>
      <Header border url={urlGithub} />
      {loading && <PreloaderLine />}
      {loading && <PreloaderSkeleton />}
      <iframe
        title={srcFrame}
        src={srcFrame}
        onLoad={handleIframeLoad}
        className={`${cn.preview} ${loading ? cn.hidden : ''}`}
      ></iframe>
    </>
  );
}

WorkPreviewPage.propTypes = {
  srcFrame: PropTypes.string.isRequired,
  urlGithub: PropTypes.string.isRequired,
};

export default WorkPreviewPage;
