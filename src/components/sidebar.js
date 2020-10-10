import React, {Component} from 'react';
import { Button, Tabs, Card, Layout, Avatar, Row, Menu  } from "antd";
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons';

import {Link} from 'react-router-dom';

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  render() {

    return (
      <div className="SideNav" >
          <Link to="/">
            <Row style={{ paddingLeft:'15%', paddingTop:'9%'}}>
              <Avatar size={34} src = './icon.png' />
                <h1 style={{color: 'white', fontFamily: 'Architects Daughter', fontSize:'24px'}} level={3}> Karaoky</h1>
            </Row>
          </Link>
            {/* <div >

            <Menu style={{ paddingTop: '15%', paddingLeft:'8%'}}>
            <Link to="/">
              <Menu.Item icon={<DesktopOutlined />}>
                Home
              </Menu.Item>
            </Link>
            
            <Menu.ItemGroup key="g1" title=" Playlist ">
              <Link to="/playlist 1">
                <Menu.Item key="1">list 1</Menu.Item>
             </Link>
                <Link to="/playlist 2">

                <Menu.Item key="2">list 2</Menu.Item>
            </Link>
              </Menu.ItemGroup>
            </Menu>
        </div> */}

    </div>
    );
  }
}

export default SideBar;
