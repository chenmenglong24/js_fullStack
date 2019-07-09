import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './page/Layout'
import 'antd/dist/antd.css';
// hashRouter #   hashChange
// historyRouter 不带#   BrowseRouter 实现方式是通过h5的 History api 来实现的
// 刷新这个行为

function App() {
  return (
    <Router>
      <Route path="/" component={Layout}/>
    </Router>
  );
}

export default App;
