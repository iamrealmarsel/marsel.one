import React from 'react';

function WorkPreviewIframe(props) {
  const { onLoad } = props;

  const IframeElement = document.createElement('iframe');
  IframeElement.src = 'https://iamrealmarsel.github.io/webinar-finance/';
  IframeElement.width = '100%';
  IframeElement.onload = onLoad;

  return <IframeElement />;
}

export default WorkPreviewIframe;
