import React from 'react';
import './App.css';
import { Divider } from 'antd';

class App extends React.Component<any, any>{
  public render() {
    return (
      <div>
        <div className="App">
          <h1 style={{ fontWeight: "bold" }}>Notes App</h1>
          <Divider />
        </div>
      </div>
    );
  }
}

export default App;
