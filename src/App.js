import './App.css';
import router from './utils/router'
import { RouterProvider } from 'react-router-dom';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div className="App">
          <RouterProvider router={router} />
      </div>
    );
  }
}

export default App;
