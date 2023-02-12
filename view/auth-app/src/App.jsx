import * as React from "react";
import style from "./app.css";
import ModalForAdd from "./components/modal";
function App() {
  const [showModal, setShowModal] = React.useState(true);
  const handelShowModal = () => {
    const modalSec = document.getElementById("modal");
    modalSec.style.display = "flex";
  
  };

// console.log(req.body);

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
        <ModalForAdd/>
    </div>
  );
}

export default App;
