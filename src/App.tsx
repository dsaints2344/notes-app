import React from 'react';
import './App.css';
import { Divider } from 'antd';
import Notes from './Notes'
import INotesProps from './typings/INotesProps';

class App extends React.Component<INotesProps, any>{
  public render() {
    return (
      <div>
        <div className="App">
          <h1 style={{ fontWeight: "bold" }}>Notes App</h1>
          <Divider />
          <Notes title={this.props.title} content={this.props.content}/>
        </div>
      </div>
    );
  }
}

export default App;
