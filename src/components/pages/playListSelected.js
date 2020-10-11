import React, {Component} from 'react';
import { Button, Tabs, Card, Layout, Avatar, Row, Menu, Col  } from "antd";
import './pageStyle.css';
import {Link} from 'react-router-dom';
import Content from "../content";
import Artists from "./artistSong";
// import {useParams} from 'react-router-dom';


const { Meta } = Card;
const musicCardList = [
    {
      id: 1,
      catagory_id: 100,
      name: 'ትዝታ',
      img: './Assets/kirar.jpeg'
    }, 
    {
        id: 3,
        catagory_id: 100,
        name: 'ባቲ',
        img: './Assets/bati.jpeg'
    },
    {
      id: 2,
      catagory_id: 100,
      name: 'አምባሠል',
      img: './Assets/ambasel.jpeg'
    }, 
    {
        id: 4,
        catagory_id: 100,
        name: 'አንቺ ሄዬ',
        img: './Assets/anchiiHoye.jpeg'
    },
    {
        id: 5,
        catagory_id: 200,
        name: 'አንቺ ሄዬ',
        img: './Assets/bbatii.jpeg'
    },
  
]


export default class SelectedPlaylist extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            passesId: this.props.match.params.id
          }
          console.log('propppss',this.props.match.params.id, musicCardList)
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
        const name = musicCardList.filter(playList => playList.id );
        const generName = name.map(list => {
           var u = list.id;
           console.log('return', list.id, this.state.passesId, list.id == this.state.passesId )
           if(list.id == this.state.passesId){
               return list.name;
            }
           
        })
  
        return(
            <div>
                    <Row>
                        <h1 style={{color: 'red', fontFamily:'Permanent Marker', paddingLeft: '2%', float: 'left', fontSize: '22px', paddingTop:'3%'}}>የ{generName} አርቲስቶች</h1>
                    </Row>
                
                <Row  gutter={12} style={{paddingRight: '3%', paddingLeft: '5%', }} >
                {artistList.map((playList, id) => (
                    <Col className="gutter-row" style={{ float:'left', paddingTop: '2%'}} span={6}>
                    <Link to={`/Artist/` + playList.id} 
                        render={(props) => (<Artists  {...props}/>)}
                    >
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
                    </Link>
                        </Col>
                ))}
                    </Row>
            </div>
        )
    }
}