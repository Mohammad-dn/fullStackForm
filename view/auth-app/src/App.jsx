import * as React from "react";
import style from "./app.css";
import ModalForAdd from "./components/modal";
function App() {
  const [showModal, setShowModal] = React.useState(false);
  const handelShowModal = () => {
    setShowModal(!showModal);
    const modalSec = document.getElementById("modal");
    modalSec.style.display = "flex";
  };
  const handelHideModal = () => {
    setShowModal(!showModal);

    const modalSec = document.getElementById("modal");
    modalSec.style.display = "none";
  };
  const handelSubmitForm = (e) => {
    e.preventDefault();
    console.log(document.getElementsByTagName("input")[0].value);
    const phoneNumber = document.getElementsByTagName("input")[0].value;
    const emailAddress = document.getElementsByTagName("input")[1].value;
    const webSite = document.getElementsByTagName("input")[2].value;
    const location = document.getElementsByTagName("input")[3].value;
    const colorTheme=document.getElementsByTagName("input")[4].value;
    console.log(colorTheme);

    fetch("http://localhost:3000/formdata", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber,
        emailAddress,
        webSite,
        location,
      }),
    });
  };

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
