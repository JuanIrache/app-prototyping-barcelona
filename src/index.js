import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TagContextProvider } from './contexts/TagContext';
import { ProjectContextProvider } from './contexts/ProjectContext';
import { VideoContextProvider } from './contexts/VideoContext';
import { GalleryContextProvider } from './contexts/GalleryContext';

ReactDOM.render(
  <TagContextProvider>
    <ProjectContextProvider>
      <VideoContextProvider>
        <GalleryContextProvider>
          <App />
        </GalleryContextProvider>
      </VideoContextProvider>
    </ProjectContextProvider>
  </TagContextProvider>,
  document.getElementById('root')
);
