import React, { Component } from "react";

import Content from "./components/content";
import SelectedPlaylist from "./components/pages/playListSelected";
import Artist from "./components/pages/artistSong";
import SignUp from "./components/signup";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import { Layout } from "antd";
import SideBar from "./components/sidebar";

const { Sider, Header } = Layout;

export default class MainRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={SignUp}></Route>

          <Route path="/dashboard" component={Dashboard}></Route>
          <Layout style={{ marginLeft: 200 }}>
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
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: '8.5%', background:'#001529'}} ></Header>

            <Route
              path="/playList/:id"
              render={(props) => <SelectedPlaylist {...props} />}
            />
            <Route
              path="/Artist/:id"
              render={(props) => <Artist {...props} />}
            />
          </Layout>
        </Switch>
      </div>
    );
  }
}
