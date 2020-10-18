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
          <Link to="/dashboard">
            <Row style={{ paddingLeft:'15%', paddingTop:'3%',background:'#001529' }}>
              <Avatar size={34} src = './icon.png' />
                <h1 style={{ color: 'red', fontFamily: 'Architects Daughter', fontSize:'24px'}} level={3}> Karaoke</h1>
            </Row>
          </Link>

    </div>
    );
  }
}

export default SideBar;
