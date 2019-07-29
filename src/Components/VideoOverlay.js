import React, { useEffect } from 'react';
import '../style/VideoOverlay.scss';

const VideoOverlay = ({ visible, src, title, setVideo }) => {
  const closeVideo = () => {
    setVideo({ visible: false, src, title });
    setTimeout(() => {
      document.querySelector('#videoPlayer').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }, 500);
  };

  useEffect(() => {
    const fixed = document.querySelector('.VideoOverlay');
    fixed.addEventListener('touchmove', e => e.preventDefault(), false);
  }, []);

  return (
    <div className={`VideoOverlay${visible ? ' visible' : ''}`} onClick={closeVideo}>
      <iframe
        id="videoPlayer"
        title={title + ' video'}
        src={`https://www.youtube.com/embed/${src}?enablejsapi=1&rel=0`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoOverlay;