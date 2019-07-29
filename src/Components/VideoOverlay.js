import React from 'react';
import '../style/VideoOverlay.scss';

const VideoOverlay = ({ visible, src, title, setVideo }) => {
  const closeVideo = () => {
    setVideo({ visible: false, src, title });
  };
  return (
    <div className={`VideoOverlay${visible ? ' visible' : ''}`} onClick={closeVideo}>
      <iframe
        title={title + ' video'}
        src={`https://www.youtube.com/embed/${src}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoOverlay;
