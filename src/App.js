import React, {Component} from 'react';
import { Breadcrumb, Layout } from "antd";
import Contents from './components/content';
import Main from './components/MainRoutes';
import SideBar from './components/sidebar';
import Artist from './components/pages/artistSong';
// import 

import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'

const {  Footer, Sider, Content } = Layout;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    }
  }
  render() {

    return (
      <div className="App">
        <Layout>
          <Sider 
          theme= {"light"}
          style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        // color: "red"g
        backgroundImage: `url(${'./pattern.jpg'})`
        
      }}>
            <SideBar />
        </Sider>
        <Layout  className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ background:'#f0f0ff', minHeight: window.innerHeight - 85 }}>
              {/* <Artist /> */}
              <Main />
            </div>
          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Footer</Footer> */}
          </Layout>
        </Layout>

    </div>
    );
  }
}

export default App;
