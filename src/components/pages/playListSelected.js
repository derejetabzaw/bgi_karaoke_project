import React, {Component} from 'react';
import { Button, Tabs, Card, Layout, Avatar, Row, Menu, Col  } from "antd";
import './pageStyle.css';
import {Link} from 'react-router-dom';
import Content from "../content";
import Artists from "./artistSong";
// import {useParams} from 'react-router-dom';


const { Meta } = Card;

export default class SelectedPlaylist extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
          }
          console.log('propppss',this.props)
        }
    render(){
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
              name: 'ቴዲአ ፍፎ',
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
            name: 'አስቴር አወቀ',   
            image: '/Assets/teshaye.jpeg'
        },
        {
          id: 7,
          catagory_id: 100,
          name: 'አለማየሁ እቨቴ',
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
          name: 'ጂጂ',
          image: '/Assets/abenet.jpeg'
      },
      {
          id: 10,
          catagory_id: 200,
          name: 'ቀመር ዩሴፍ',
          image: '/Assets/kemer.jpeg'
      },
     ]
  
        return(
            <div>
                <Row>
                    <h1 style={{ fontFamily:'Permanent Marker', paddingLeft: '2%', float: 'left', fontSize: '28px', paddingTop:'3%'}}>Artists</h1>
                </Row>
                <Row  gutter={12} style={{paddingRight: '3%', paddingLeft: '5%', }} >
                {artistList.map((playList, id) => (
                    <Link to={`/Artist/` + playList.id} 
                        render={(props) => (<Artists  {...props}/>)}
                    >

                        <Col className="gutter-row" style={{ float:'left', paddingTop: '2%'}} span={6}>
                                <Card hoverable
                                    style={{ width: '100%' }} 
                                    key={id}
                                    >
                                        
                                        <img 
                                        className="img"
                                            alt="example"
                                            src={playList.image}
                                        />
                                    <Meta
                                    style={{paddingTop: '8%'}}
                                    title= {playList.name}
                                    />
                                </Card>
                        </Col>
                    </Link>
                ))}
                    </Row>
            </div>
        )
    }
}