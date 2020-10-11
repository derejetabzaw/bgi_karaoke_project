import React, {Component} from 'react';
import { Button, Tabs, Card, Layout, Avatar, Row, Menu, Col  } from "antd";
import './style.css';

import SelectedPlaylist from "./pages/playListSelected";
import ScrollArea from "react-scrollbar";
import {Link} from 'react-router-dom';

const { Meta } = Card;

class PlayLists extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  render() {
      const musicCardList = [
          {
            id: 1,
            catagory_id: 100,
            name: 'ትዝታ',
          }, 
          {
              id: 3,
              catagory_id: 100,
              name: 'ባቲ',
          },
          {
            id: 2,
            catagory_id: 100,
            name: 'አምባሠል',
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

    const matchedPlaylist = musicCardList.filter(playList => playList.catagory_id === this.props.catagory_id);
    console.log('match playlist',  this.props);
    return (
      <div >
          <div>
            <ScrollArea
                        speed={0.8}
                        className="area"
                        contentClassName="content"
                        horizontal={false}
                        ma
                        >

                {matchedPlaylist.map((playList, id) => (
                    <Link to={`/playlist/` + playList.id} 
                    render={(props) => (<SelectedPlaylist  {...props}/>)}
                    >
                        <Col className="gutter-row" style={{ float:'left'}} span={6}>
                                <Card hoverable
                                    style={{ width: '100%' }} 
                                    key={id}
                                    >
                                        <img style={{ width: '100%', height: '10%' }}
                                            alt="example"
                                            src='./Assets/bati.jpeg'
                                        />
                                    <Meta
                                    style={{paddingTop: '8%'}}
                                    title= {playList.name}
                                    />
                                </Card>
                        </Col>
                     </Link>
                ))}

            </ScrollArea>
          </div>
      </div>
    
    );
  }
}

export default PlayLists;
