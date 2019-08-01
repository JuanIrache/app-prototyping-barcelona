import React, { useContext } from 'react';
import VideoContext from '../contexts/VideoContext';
import '../style/VideoOverlay.scss';

const VideoOverlay = () => {
  const { video, setVideo } = useContext(VideoContext);
  const { visible, src, title } = video;

  const closeVideo = () => {
    setVideo({ visible: false, src, title });
    setTimeout(() => {
      document.querySelector('#videoPlayer').contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }, 500);
  };

  const preventMove = e => e.preventDefault();

  return (
    <div className={`VideoOverlay${visible ? ' visible' : ''}`} onClick={closeVideo} onTouchMove={preventMove}>
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
