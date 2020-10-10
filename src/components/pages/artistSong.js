import React, {Component} from 'react';
import { Icon, Button, Modal , List, Tabs, Card, Layout, Avatar, Row, Menu, Col  } from "antd";
import {
   
  } from '@ant-design/icons';
import ScrollArea from "react-scrollbar";
import './pageStyle.css';

const { Meta } = Card;

class PlayLists extends Component {
  constructor(props){
    super(props);
    this.state = {
      linkClicked: false,
    }
  }
  componentDidMount() {

  }

  clicked = () => { 
    this.setState({
        linkClicked: true
    })
  }

  render() {
      const musicCardList = [
          {
              id: 1,
              catagory_id: 100,
              name: 'ባቲ',
          },
          {
            id: 2,
            catagory_id: 100,
            name: 'አምባሠል',
          },
        {
            id: 3,
            catagory_id: 100,
            name: 'ትዝታ',
        }, 
        {
            id: 4,
            catagory_id: 100,
            name: 'አንቺ ሄዬ',
        },
        {
            id: 5,
            catagory_id: 200,
            name: 'አንቺ ሄዬ',
        },
        
      ]
    return (
        <div style={{background: '#fff0 ff', maxHeight: window.innerHeight -     125}}>
            <Row gutter={10} style={{ paddingLeft:'3%'}} >
                <Col span={18} push={6} style={{paddingTop: '4%', paddingLeft:'3%'}}>
                    <List
                        itemLayout="horizontal"
                        dataSource={musicCardList}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="./music_play.svg" />}
                                    title={<a onClick={this.clicked}>Hello</a>}
                                    // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                >
                                </List.Item.Meta>
                            </List.Item>
                        )}
                    />
                </Col>
                <Col span={6} pull={18} style={{paddingTop: '4%'}}>
                    <Col>
                        <Card hoverable style={{ width: '100%', boxShadow:'3px 3px #888888', }}  >
                            <img className="imgs"
                                alt="example"
                                src='../Assets/tilahun.jpeg' />
                            <Meta style={{paddingTop: '8%', fontSize: '22'}}
                                            title= 'Name'
                                            />
                        </Card>
                    </Col>
                    <Col>
                        
                    </Col>
                </Col>
            </Row>

            <Modal
                title="Modal 1000px width"
                centered
                visible={this.state.linkClicked}
                onCancel={() => this.setState({
                    linkClicked: false
                })}
                width={1100}
                style={{height: window.maxHeight - 35, opacity: '0.6'}}
                footer={
                    <div>
                        {/* <Icon /> */}
                    </div>
                }
            >
                <div style={{alignContent: 'center', textAlign:'center', border: '0', boxShadow: "none", WebkitBoxShadow:'none'}}>

                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
                </div>
            </Modal>
        </div>

    
    );
  }
}

export default PlayLists;

