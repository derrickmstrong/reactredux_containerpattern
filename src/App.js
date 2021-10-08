import './App.css';
import React from 'react';
// Import default Posts Component via Post Folder
import { Posts } from './components/Posts';

const App = () => {
  return (
    <div className='App'>
      <Posts />
    </div>
  );
};

export default App;
