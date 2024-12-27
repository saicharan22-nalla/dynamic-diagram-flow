import React from 'react';
import { DiagramProvider } from './contexts/DiagramContext';

import Sidebar from './components/Sidebar/Sidebar';
import FlowDiagram from './components/FlowDiagram/FlowDiagram';
import './App.css'

function App() {
  return (
    <DiagramProvider>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <FlowDiagram/>
      </div>
    </DiagramProvider>
  );
}

export default App;