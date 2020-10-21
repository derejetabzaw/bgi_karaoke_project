import React, { Component } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Tabs,
  Card,
  InputNumber,
  Select,
  Row,
  Menu,
  Col,
} from "antd";
import {Link} from 'react-router-dom';
import Dashboard from '../dashboard';
import { withRouter } from "react-router-dom";
// import Main from "./components/MainRoutes";

// const { VideoPlayer } = require('react-video-js-player'); //#292934
const { TabPane } = Tabs;
const { Option } = Select;
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkClicked: false,
    };
  }
  componentDidMount() {}
  
  navigate = () => {
    
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div style={{paddingTop: '2%'}}>
        <Card
        //   bordered={false}
          style={{
            maxWidth: window.innerWidth - 910,
            height: window.innerHeight - 110,
            display: "block",
            margin: "auto",
            // paddingTop: '3%',
            background: '#eeeeee',
            
            // marginRight: "auto",

          }}
        >
          <Tabs defaultActiveKey="2" centered>
            <TabPane tab="Sign-In" key="1">
              <Form
                style={{ paddingTop: "7%" }}
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item style={{paddingTop: '3%'}}>
                  <Button type="primary" htmlType="submit"
                  style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', display: 'block  '}}
                  >
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
            <TabPane tab="Register" key="2">
              <Form
                style={{ paddingTop: "4%" }}
                layout="vertical"
                name="basic"
                initialValues={{ remember: true }}
              >
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[{ required: true, type: "email", message: "Please input your email!"}]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Row  gutter={2} >
                  <Col span={6}>
                    <Form.Item
                      name={["user", "age"]}
                      label="Age"
                      rules={[{ type: "number", min: 0, max: 99, message: "Please edit your age!" }]}
                    >
                      <InputNumber />
                    </Form.Item>
                  </Col>
                  <Col span={6}></Col>
                  <Col span={12}>
                    <Form.Item
                      name="gender"
                      label="Gender"
                      rules={[{ required: true }]}
                      
                    >
                      <Select
                        // placeholder="Select a option and change input text above"
                        // onChange={onGenderChange}
                        allowClear
                      >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item   style={{paddingTop: '3%'}}>
                  <Button type="primary" htmlType="submit" 
                  onClick={this.navigate}
                  style={{width: '70%', marginLeft: 'auto', marginRight: 'auto', display: 'block  '}}
                  >
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    );
  }
}

export default withRouter(Signup) ;
