import React, { Component } from "react";
import { Modal, List, Card, Button, Tooltip, Row, Col } from "antd";
import { StopOutlined, BorderOutlined, AudioOutlined } from "@ant-design/icons";
import "video.js/dist/video-js.min.css";
import { ReactMic } from "react-mic";
import "videojs-wavesurfer/dist/css/videojs.wavesurfer.css";
import "./pageStyle.css";
import Daw from "./Videos/dawit_melese_f.mp4";
import Ted from "./Videos/teddy_afro_f.mp4";

const artistList = [
  {
    id: 14,
    catagory_id: 100,
    name: "ዳዊት መለሰ",
    image: "/Assets/dawitM.jpeg",
    videoName: "ዳዊት መለሰ እንዴት ልቻል የ ሙዚቃ ግጥም",
    music: Daw,
  },
  {
    id: 3,
    catagory_id: 100,
    name: "ቴዲ አፍፎ",
    image: "/Assets/teddy.jpeg",
    videoName: "ቴዎድሮስ ካሳሁን (ቴዲ አፍሮ) - Ethiopia",
    music: Ted,
  },
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

class PlayLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkClicked: false,
      passesId: this.props.match.params.id,
      music: "",
      audio: '',
      record: false,
      blob: null,
    };
  }
  componentDidMount() {}
  clicked = (music) => {
    this.setState({
      linkClicked: true,
      music: music,
    });
  };

  startRecording = (btn, vidId) => {
    var vid = document.getElementById(vidId);
    vid.play();
    this.setState({ record: true });
  };

  stopRecording = (btn, vidId) => {
    var vid = document.getElementById(vidId);
    vid.pause();
    this.setState({ record: false });

  };

  onData(recordedBlob) {
    console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    this.setState({
      audio: recordedBlob.blobURL
    })
  }

  render() {
    const name = artistList.filter((playList) => playList.id);
    const artistListImg = name.map((list) => {
      if (list.id == this.state.passesId) {
        return list.image;
      }
    });
    const artistListName = name.map((list) => {
      if (list.id == this.state.passesId) {
        return list.name;
      }
    });
    const artistVid = name.map((list) => {
      if (list.id == this.state.passesId) {
        return list;
      }
    });
    const artistImage = artistListImg.filter((img) => img != undefined);
    const artistName = artistListName.filter((img) => img != undefined);
    const artistVideo = artistVid.filter((vid) => vid != undefined);

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
                dataSource={artistVideo}
                renderItem={(item) => (
                  <List.Item>
                    <>
                      <a
                        onClick={() => this.clicked(item.music)}
                        style={{ fontSize: "18px" }}
                      >
                        {item.videoName}
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
              {this.state.linkClicked ? (
                <>
                  <video id="myVideoPlayer" width="720" height="400" >
                    <source src={this.state.music} type="video/mp4" />
                  </video>
                  <div
                    style={{
                      background: "#333",
                      padding: "10px",
                      width: "720px",
                    }}
                  >
                    <Row>
                      <ReactMic
                        record={this.state.record}
                        className="sound-wave"
                        onStop={this.onStop}
                        onData={this.onData}
                        mimeType="audio/wav"  
                        strokeColor="white"
                        backgroundColor="#292934"
                        style={{height: '30px', }}
                      />
                      <Col span={12}>
                        <Tooltip title="Record">
                          <Button
                            type="primary"
                            shape="circle"
                            icon={<AudioOutlined />}
                            id="start"
                            onClick={() => this.startRecording(this, 'myVideoPlayer')}
                          />
                        </Tooltip>
                      </Col>
                      <Col span={12}>
                        <Tooltip title="Stop">
                          <Button
                            type="primary"
                            shape="circle"
                            icon={<BorderOutlined />}
                            id="stop"
                            onClick={
                              () =>
                              this.stopRecording(this, 'myVideoPlayer')
                            }
                          />
                        </Tooltip>
                      </Col>
                    </Row>
                  </div>
                </>
              ) : (
                []
              )}
            </div>
          </Modal>
          <audio src={this.state.audio} id='audio' controls style={{marginLeft: '3.5%', width: '22%', paddingTop:'1%'}}></audio>
          {/* <video  id='vid' controls ></video> */}
        </div>
      </div>
    );
  }
}

export default PlayLists;
