import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { TagContextProvider } from './contexts/TagContext';
import { ProjectContextProvider } from './contexts/ProjectContext';

ReactDOM.render(
  <ProjectContextProvider>
    <TagContextProvider>
      <App />
    </TagContextProvider>
  </ProjectContextProvider>,
  document.getElementById('root')
);
