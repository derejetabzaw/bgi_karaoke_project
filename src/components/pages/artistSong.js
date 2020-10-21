import React, { Component } from "react";
import {
  Typography,
  Divider,
  Modal,
  List,
  Tabs,
  Card,
  Layout,
  Avatar,
  Row,
  Menu,
  Col,
} from "antd";
import "./pageStyle.css";
import Daw from "./Videos/dawit_melese_f.mp4";
import Ted from "./Videos/teddy_afro_f.mp4";

import Item from "antd/lib/list/Item";

const artistList = [
  {
    id: 1,
    catagory_id: 100,
    name: "አስቴር አወቀ",
    image: "/Assets/aster.jpeg",
  },
  {
    id: 2,
    catagory_id: 100,
    name: "አለማየሁ እቨቴ",
    image: "/Assets/alemayehu.jpeg",
  },
  {
    id: 3,
    catagory_id: 100,
    name: "ቴዲ አፍፎ",
    image: "/Assets/teddy.jpeg",
  },
  {
    id: 4,
    catagory_id: 100,
    name: "ጂጂ",
    image: "/Assets/gigi.jpeg",
  },
  {
    id: 5,
    catagory_id: 200,
    name: "ጥላሁን ገሠሠ",
    image: "/Assets/tilahun.jpeg",
  },
  {
    id: 6,
    catagory_id: 100,
    name: "ፀሃዬ ዮሃንስ",
    image: "/Assets/teshaye.jpeg",
  },
  {
    id: 7,
    catagory_id: 100,
    name: "ጎሳዬ ተስፋዬ",
    image: "/Assets/gossaye.jpeg",
  },
  {
    id: 8,
    catagory_id: 100,
    name: "ቴዲአ ፍፎ",
    image: "/Assets/dawit.jpeg",
  },
  {
    id: 9,
    catagory_id: 100,
    name: "አብነት አጎናፍር",
    image: "/Assets/abenet.jpeg",
  },
  {
    id: 10,
    catagory_id: 200,
    name: "ቀመር ዩሴፍ",
    image: "/Assets/kemer.jpeg",
  },
  {
    id: 9,
    catagory_id: 100,
    name: "ጂጂ",
    image: "/Assets/abenet.jpeg",
  },
  {
    id: 10,
    catagory_id: 200,
    name: "ማሀሙድ አህመድ",
    image: "/Assets/mohamed.jpeg",
  },
];
// const { VideoPlayer } = require('react-video-js-player');

class PlayLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkClicked: false,
      passesId: this.props.match.params.id,
      music: "",
    };
  }
  componentDidMount() {}
  clicked = (music) => {
    console.log("------->", this.props);
    this.setState({
      linkClicked: true,
      music: music,
    });
  };

  stopVid = () => {
    var video = document.getElementById("myVideoPlayer");
    video.pause();
    video.currentTime = 0;
  };

  render() {
    const Cover = "./Assets/mic2.jpeg";

    const name = artistList.filter((playList) => playList.id);
    const artistListImg = name.map((list) => {
      console.log(
        "return",
        list,
        list.id,
        this.state.passesId,
        list.id == this.state.passesId
      );
      if (list.id == this.state.passesId) {
        return list.image;
      }
    });
    const artistListName = name.map((list) => {
      console.log(
        "return",
        list,
        list.id,
        this.state.passesId,
        list.id == this.state.passesId
      );
      if (list.id == this.state.passesId) {
        return list.name;
      }
    });
    const artistImage = artistListImg.filter((img) => img != undefined);
    const artistName = artistListName.filter((img) => img != undefined);
    console.log("idddd", artistListName[0]);

    const musicCardList = [
      {
        id: 1,
        catagory_id: 100,
        name: "ዳዊት መለሰ እንዴት ልቻል የ ሙዚቃ ግጥም",
        music: Daw,
      },
      {
        id: 2,
        catagory_id: 100,
        name: "ቴዎድሮስ ካሳሁን (ቴዲ አፍሮ) - Ethiopia",
        music: Ted,
      },
    ];

    return (
      <div style={{ background: "#292934", paddingTop: "3%" }}>
        <div style={{ background: "#292934", height: "100vh", width: "180vh" }}>
          <Row gutter={18} style={{ paddingLeft: "3%", paddingRight: "3%" }}>
            <Col span={6} style={{ paddingTop: "4%" }}>
              <Col>
                <Card
                  hoverable
                  style={{ width: "100%", boxShadow: "3px 3px #FA8072" }}
                >
                  <img className="imgs" alt="example" src={artistImage} />
                  <div>{artistName}</div>
                </Card>
              </Col>
            </Col>
            <Col span={18} style={{ paddingTop: "4%", paddingLeft: "3%" }}>
              <List
                header={
                  <>
                    <div
                      style={{
                        fontSize: "24px",
                        color: "red",
                        fontFamily: "Permanent Marker",
                        // marginLeft: "10%",
                      }}
                    >
                      Song List
                    </div>
                    {/* <Divider /> */}
                  </>
                }
                bordered
                dataSource={musicCardList}
                renderItem={(item) => (
                  <List.Item>
                    <>
                      {/* <Typography.Text >{item.id}</Typography.Text> */}
                      <a
                        onClick={() => this.clicked(item.music)}
                        style={{ fontSize: "18px" }}
                      >
                        {item.name}
                      </a>
                    </>
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
                linkClicked: false,
              })
            }
            width={0}
            style={{ paddingRight: "50%" }}
            footer={<div></div>}
          >
            <div
              style={{
                alignContent: "center",
                paddingTop: "2.5%",
                marginLeft: "1%",
                marginRight: "auto",
                textAlign: "center",
                border: "0",
                boxShadow: "none",
              }}
            >
              {
                this.state.linkClicked ? (
                  <video id="myVideoPlayer" width="720" height="400" controls>
                    <source src={this.state.music} type="video/mp4" />
                  </video>
                ) : (
                  []
                )
                //  console.log('selected', this.state.music)
              }
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default PlayLists;
