import React, { Component } from "react";
import { Breadcrumb, Layout } from "antd";
import Contents from "./components/content";
import Main from "./components/MainRoutes";
import SideBar from "./components/sidebar";
import SignUp from "./components/signup";

import Artist from "./components/pages/artistSong";
// import

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

const { Header, Sider, Content } = Layout;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  render() {
    return (
      <div className="App">
       <Layout>
          <Sider
            theme={"dark"}
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0,
              // color: "red"g
              backgroundImage: `url(${"./pattern.jpg"})`,
            }}
          >
            <SideBar />
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '8.5%', background:'#001529'}} ></Header>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                className="site-layout-background"
                style={{
                  background: "blue-black",
                  minHeight: window.innerHeight - 85,
                }}
              >
              <Contents />
              </div>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>Footer</Footer> */}
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Dashboard;
