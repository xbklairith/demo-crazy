import React, { Component } from 'react';
import logo from './bg.png';
import './App.css';
import 'normalize.css/normalize.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="htext">
      หน้าแรก ประชาธิปไตย
      </div>
       <div className="not-found">
         หาไม่พบ หรือไม่มีสิทธิ์เข้าถึง
       </div>
       <div className="ext">
        <a href="https://th.wikipedia.org/wiki/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%98%E0%B8%B4%E0%B8%9B%E0%B9%84%E0%B8%95%E0%B8%A2" >เพิ่มเติม</a>
       </div>

    </div>
    );
  }
}

export default App;
