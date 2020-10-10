import React, {Component} from 'react';
import { Button, Tabs, Card, Layout, Avatar, Row, Menu, Col  } from "antd";
import './style.css';
import ScrollArea from "react-scrollbar";
import Playlist from './playlist';

const { Meta } = Card;

class SideBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    }
  }

  render() {
      const catgories = [
          {
            id: 100,
            name: 'Geners',
          },
          {
            id: 200,
            name: 'Recommendation',
          }
      ]

    return (
      <div >
          <div>
              
              {catgories.map((catagory, id) =>
              <>
                <Row>
                    <h1 style={{ fontFamily:'Permanent Marker', paddingLeft: '2%', float: 'left', fontSize: '28px', paddingTop:'3%'}}>{catagory.name}</h1>
                </Row>
                <Row  gutter={24} style={{paddingRight: '3%', paddingLeft: '5%', }} >
                  <Playlist catagory_id={catagory.id} />
                </Row>
              </>
              )}

            {/* <ScrollArea
                        speed={0.8}
                        className="area"
                        contentClassName="content"
                        horizontal={false}
                        ma
                        >
                        
                </ScrollArea> */}
    </div>
    </div>
    
    );
  }
}

export default SideBar;
