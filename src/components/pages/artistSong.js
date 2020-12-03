import React, { Component } from "react";
import { Modal, List, Card, Button, Tooltip, Row, Col, Alert } from "antd";
import {
  StopOutlined,
  BorderOutlined,
  UploadOutlined,
  AudioOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import "video.js/dist/video-js.min.css";
import { ReactMic } from "react-mic";
import "videojs-wavesurfer/dist/css/videojs.wavesurfer.css";
import "./pageStyle.css";
import Daw from "./Videos/dawit_melese_f.mp4";
import Ted from "./Videos/teddy_afro_f.mp4";
import ReactStars from "react-rating-stars-component";
// import Record from './records.txt';

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
var fs = require("fs");

class PlayLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      linkClicked: false,
      passesId: this.props.match.params.id,
      music: "",
      url: "",
      audio: [], // saves the recorded audio thru this
      record: false,
      blob: null,
      confirmation: false,
      raterModal: false,
      rateVal: "",
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
    //starts recording audio
    var vid = document.getElementById(vidId);
    console.log(vid, "visss-----");

    if (vid.paused) {
      vid.play(); //playes video file
      this.setState({ record: true });
    } else {
      vid.pause(); //pauses video file
      this.setState({ record: false });
    }
  };

  resetRecording = (btn, vidId) => {
    var vid = document.getElementById(vidId);
    console.log(vid, "visss");
    vid.pause();
    vid.load();
    this.setState({ record: false });
    // vid.play();
  };

  ratingChanged = (newRating) => {
    console.log(newRating);
    // switch (newRating) {
    //   case value:

    //     break;

    //   default:
    //     break;
    // }
    this.setState({
      rateVal: newRating ? newRating : 3.5,
    });
  };
  onData(recordedBlob) {
    // console.log("chunk of real-time data is: ", recordedBlob);
  }

  onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);

    //recordedBlob.blobURL is the singe audio file thats recorded
    var record = recordedBlob.blobURL;
    this.setState({
      url: record
    })
    if (localStorage.getItem("audio") == null) {
      var audio = [];
      audio.push(record);
      localStorage.setItem("audio", audio);
    } else {
      var audio = localStorage.getItem("audio");
      if (!(audio instanceof Array)) {
        audio = [audio];
        audio.push(record);
        localStorage.setItem("audio", audio);
      }
    }
    this.setState({
      audio: localStorage.getItem("audio"), //saves all recorded file url on this array
    });
    console.log("recordedBlob 00000000is: ", localStorage.getItem("audio"));

    // this.onUpload(localStorage.getItem('audio'));
  };
  rater = () => {
    this.setState({
      raterModal: true,
      confirmation: false,
    });
  };

  uploadRecord = (btn, vidId) => {
    var vid = document.getElementById(vidId);
    console.log("dattaaa", vid);
    vid.pause(); //pauses video file
    if (vid.paused && this.state.record == '') {
      alert('You need to record something inorder to submit your result')
    } 
    else if (vid.paused) {
      this.setState({ record: false, confirmation: true });
    }
    else {
      this.setState({
        confirmation: false,
        record: true,
      });
    }
  };

  render() {
    console.log('this is the recorded file', this.state.url)
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
                  <video id="myVideoPlayer" width="720" height="400">
                    <source src={this.state.music} type="video/mp4" />
                  </video>
                  <div
                    style={{
                      background: "#333",
                      padding: "10px",
                      width: "720px",
                    }}
                  >
                    <ReactMic
                      record={this.state.record}
                      className="sound-wave"
                      onStop={this.onStop}
                      onData={this.onData}
                      mimeType="audio/mp3"
                      strokeColor="white"
                      backgroundColor="#292934"
                      style={{ height: "30px" }}
                    />
                    <Row>
                      <Col
                        style={{
                          marginLeft: "41%",
                          marginRight: "auto",
                          display: "block",
                        }}
                      >
                        <Tooltip title="Record/Stop">
                          <Button
                            type="primary"
                            shape="circle"
                            icon={<AudioOutlined />}
                            id="start"
                            onClick={() =>
                              this.startRecording(this, "myVideoPlayer")
                            }
                          />
                        </Tooltip>
                      </Col>
                      <Col style={{ marginLeft: "-38%", marginRight: "auto" }}>
                        <Tooltip title="Submit">
                          <Button
                            type="primary"
                            shape="circle"
                            icon={<UploadOutlined />}
                            id="start"
                            onClick={() =>
                              this.uploadRecord(this, "myVideoPlayer")
                            }
                          />
                        </Tooltip>
                      </Col>
                      <Col style={{ marginLeft: "-38%", marginRight: "auto" }}>
                        <Tooltip title="Reset">
                          <Button
                            type="primary"
                            shape="circle"
                            icon={<ReloadOutlined />}
                            id="start"
                            onClick={() =>
                              this.resetRecording(this, "myVideoPlayer")
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
          <Modal
            title={<b>Confirmation</b>}
            visible={this.state.confirmation}
            onOk={this.rater}
            onCancel={() =>
              this.setState({
                confirmation: false,
              })
            }
            okText="Yes"
            cancelText="Cancel"
          >
            <p>Do you want to terminate the game and view your result?</p>
          </Modal>
          <Modal
            title={<b>Result</b>}
            visible={this.state.raterModal}
            onCancel={() =>
              this.setState({
                raterModal: false,
              })
            }
            // cancelText="Ok"
            footer={null}
          >
            <p>Your result</p>
            <ReactStars
              count={5}
              onChange={this.ratingChanged}
              size={34}
              value={this.state.rateVal}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </Modal>
        </div>
      </div>
    );
  }
}

export default PlayLists;
