import React, {Component} from 'react';
import { Typography, Divider, Modal , List, Tabs, Card, Layout, Avatar, Row, Menu, Col  } from "antd";
import {
    MenuFoldOutlined
  } from '@ant-design/icons';
import VideoPlayer from 'react-video-js-player';
import ScrollArea from "react-scrollbar";
import './pageStyle.css';

const { Meta } = Card;
const artistList = [
    {
        id: 1,
        catagory_id: 100,
        name: 'አስቴር አወቀ',
        image: '/Assets/aster.jpeg'
    },
    {
      id: 2,
      catagory_id: 100,
      name: 'አለማየሁ እቨቴ',
      image: '/Assets/alemayehu.jpeg'
    },
  {
      id: 3,
      catagory_id: 100,
      name: 'ቴዲ አፍፎ',
      image: '/Assets/teddy.jpeg'
  }, 
  {
      id: 4,
      catagory_id: 100,
      name: 'ጂጂ',
      image: '/Assets/gigi.jpeg'
  },
  {
      id: 5,
      catagory_id: 200,
      name: 'ጥላሁን ገሠሠ',
      image: '/Assets/tilahun.jpeg'
  },
  {
    id: 6,
    catagory_id: 100,
    name: 'ፀሃዬ ዮሃንስ',   
    image: '/Assets/teshaye.jpeg'
},
{
  id: 7,
  catagory_id: 100,
  name: 'ጎሳዬ ተስፋዬ',
  image: '/Assets/gossaye.jpeg'
},
{
  id: 8,
  catagory_id: 100,
  name: 'ቴዲአ ፍፎ',
  image: '/Assets/dawit.jpeg'
}, 
{
  id: 9,
  catagory_id: 100,
  name: 'አብነት አጎናፍር',
  image: '/Assets/abenet.jpeg'
},
{
  id: 10,
  catagory_id: 200,
  name: 'ቀመር ዩሴፍ',
  image: '/Assets/kemer.jpeg'
},
{
id: 9,
catagory_id: 100,
name: 'ጂጂ',
image: '/Assets/abenet.jpeg'
},
{
id: 10,
catagory_id: 200,
name: 'ማሀሙድ አህመድ',
image: '/Assets/mohamed.jpeg'
},
  
]
// const { VideoPlayer } = require('react-video-js-player');

class PlayLists extends Component {
  constructor(props){
    super(props);
    this.state = {
      linkClicked: false,
      passesId: this.props.match.params.id
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
      const DawitM = './Assets/Videos/dawit_melese_f.mp4';
      const Teddy = './Assets/Videos/teddy_afro_f.mp4';
      const Cover = './Assets/mic2.jpeg';
      
      const name = artistList.filter(playList => playList.id );
      const artistListImg = name.map(list => {
          console.log('return',list, list.id, this.state.passesId, list.id == this.state.passesId )
          if(list.id == this.state.passesId){
              return list.image;
            }
            
        })
        const artistListName = name.map(list => {
            console.log('return',list, list.id, this.state.passesId, list.id == this.state.passesId )
            if(list.id == this.state.passesId){
                return list.name;
              }
              
          })
    const artistImage = artistListImg.filter(img => img != undefined )
    const artistName = artistListName.filter(img => img != undefined )
        console.log('idddd', artistListName[0]);

      const musicCardList = [
          {
              id: 1,
              catagory_id: 100,
              name: 'ዳዊት መለሰ እንዴት ልቻል የ ሙዚቃ ግጥም',
          },
          {
            id: 2,
            catagory_id: 100,
            name: 'ቴዎድሮስ ካሳሁን (ቴዲ አፍሮ) - Ethiopia',

          },
       
        
      ]
    return (
        <div style={{background: '#fff0ff', maxHeight: window.innerHeight - 125}}>
            <Row gutter={10} style={{ paddingLeft:'3%', paddingRight:'3%'}} >
            <Col span={6}  style={{paddingTop: '4%'}}>
                    <Col>
                        <Card hoverable style={{ width: '100%', boxShadow:'3px 3px #FA8072', }}  >
                            <img className="imgs"
                                alt="example"
                                src={artistImage} />
                            {/* <Meta style={{paddingTop: '8%', fontSize: '22',}} title= {artistName} /> */}
                            <div >{artistName}</div>
                        </Card>
                    </Col>
         
                </Col>
                <Col span={18}  style={{paddingTop: '4%', paddingLeft:'3%'}}>
                <List
                    header={
                        <>
                        <div>Song List</div>
                        <Divider />
                        </>
                    }
                    // footer={<div>Footer</div>}
                    bordered
                    dataSource={musicCardList}
                    renderItem={item => (
                        <List.Item>
                            <Typography.Text >{item.id}</Typography.Text>{" "}{" "}
                            <a onClick={this.clicked} style={{ fontSize: '18px'}}>{item.name}</a> 
                        </List.Item>
                    )}
                    />
                    
                </Col>
                    
               
            </Row>

            <Modal
               
                centered
                visible={this.state.linkClicked}
                onCancel={() => 
                    this.setState({
                    linkClicked: false
                })}
                width={780}
                footer={<div></div>}
                
            >
                {/* {this.state.linkClicked ?( */}
                    <div style={{alignContent: 'center', paddingTop: '2.5%' ,marginLeft: '1%', marginRight: 'auto', textAlign:'center', border: '0', boxShadow: "none"}}>
                    
                    {/* <div style={{ display:'block', marginLeft: 'auto', marginRight: 'auto', objectFit: 'cover'}}> */}
                        <VideoPlayer src={Teddy} poster={Cover} width="720px" height="400px" />

                    </div>
                 {/* ): none } */}
                
                
            </Modal>
        </div>

    
    );
  }
}

export default PlayLists;

