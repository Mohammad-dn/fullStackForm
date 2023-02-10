import * as React from "react";
import style from "./app.css";
function App() {
  const [showModal, setShowModal] = React.useState(false);
  const handelShowModal = () =>{
    setShowModal(!showModal);
    const modalSec = document.getElementById("modal")
    modalSec.style.display="flex"
  }
  const handelHideModal = () =>{
    setShowModal(!showModal);

    const modalSec = document.getElementById("modal")
    modalSec.style.display="none"
  }
  console.log(showModal);

  return (
    <div className="main-content">
      <div className="pink-sec"></div>
      <div className="container">
        <div className="avatar-sec">
          <div className="profile-pic"></div>
          <div className="logo-pic"></div>
        </div>
        <div className="info-sec">
          <h1>name</h1>
          <div className="job-title">sale Representtaitve</div>
          <div className="form-sec">
            <div className="border-botom">phone number</div>

            <div className="border-botom">email address</div>

            <div className="border-botom">website</div>

            <div className="border-botom">location</div>
          </div>
        </div>
        <button onClick={handelShowModal} className="show-modal">
          myInput
        </button>
      </div>
      <div className="top-sec"></div>
      <div id="modal" className="modal-sec modal-sec-none">
        <button
          id="close-modal"
          onClick={handelHideModal}
          style={{
            color: "white",
            position: "absolute",
            top: "10%",
            right: "5%",
            fontSize: "30px",
          }}
        >
          X
        </button>
        <input type="" placeholder="what is your number?" />
        <input type="email" placeholder="what is your email?" />
        <input type="website" placeholder="what is your website?" />
        <input type="location" placeholder="where are you?" />
        <button className="submit-btn">submit</button>
      </div>
    </div>
  );
}

export default App;
