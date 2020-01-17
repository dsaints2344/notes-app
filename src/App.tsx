import React from 'react';
import './App.css';
import { Divider } from 'antd';
import Notes from './Notes'

class App extends React.Component<any, any>{
  public render() {
    return (
      <div>
        <div className="App">
          <h1 style={{ fontWeight: "bold" }}>Notes App</h1>
          <Divider />
          <Notes />
        </div>
      </div>
    );
  }
}

export default App;
