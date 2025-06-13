import React from 'react';
import './App.css';
import MainContainer from './MainContainer';
import './MainContainer.css';

// Make sure PUBLIC_URL is retrieved from process.env if needed in app.
// (No direct PUBLIC_URL use here, but file touched to trigger a rebuild if needed)

function App() {
  return (
    <div className="app">
      <MainContainer />
    </div>
  );
}

export default App;