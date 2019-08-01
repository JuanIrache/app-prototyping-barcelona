import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TagContextProvider } from './contexts/TagContext';
import { ProjectContextProvider } from './contexts/ProjectContext';
import { VideoContextProvider } from './contexts/VideoContext';
import { GalleryContextProvider } from './contexts/GalleryContext';
import { SlideContextProvider } from './contexts/SlideContext';

ReactDOM.render(
  <TagContextProvider>
    <ProjectContextProvider>
      <SlideContextProvider>
        <VideoContextProvider>
          <GalleryContextProvider>
            <App />
          </GalleryContextProvider>
        </VideoContextProvider>
      </SlideContextProvider>
    </ProjectContextProvider>
  </TagContextProvider>,
  document.getElementById('root')
);
