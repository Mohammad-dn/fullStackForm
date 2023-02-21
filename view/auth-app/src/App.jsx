import * as React from "react";
import style from "./app.css";
// import ModalForAdd from "./components/modal";
function App() {
  const [showModal, setShowModal] = React.useState(true);
  const [formData, setFormData] = React.useState([]);
  // const handelHideModal = () => {
  //   const modalSec = document.getElementById("modal");
  //   modalSec.style.display = "none";
  // };
  // const handelShowModal = () => {
  //   const modalSec = document.getElementById("modal");
  //   modalSec.style.display = "flex";

  // };

  const handelSubmitForm = async (e) => {
    e.preventDefault();
    const formValues = {
      name: document.getElementsByTagName("input")[0].value,
      phoneNumber: document.getElementsByTagName("input")[1].value,
      emailAddress: document.getElementsByTagName("input")[2].value,
      webSite: document.getElementsByTagName("input")[3].value,
      location: document.getElementsByTagName("input")[4].value,
      avatar: document.getElementsByTagName("input")[5].value,
      colorTheme: document.getElementsByTagName("input")[6].value,
    };
    await fetch("http://localhost:3000/formdata", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
    const modalSec = document.getElementById("modal");
    modalSec.style.display = "none";
    setFormData(formValues);
  };

  return (
    <div className="main-content">
      <div
        className="pink-sec"
        style={{
          backgroundColor: formData.colorTheme,
        }}
      >
        <div className="black-sec"></div>
      </div>
      <div className="container">
        <div className="avatar-sec">
          <div
            className="profile-pic"
            style={{
              borderLeftColor: formData.colorTheme,
              borderBottomColor: formData.colorTheme,
            }}
          ></div>
          <div className="logo-pic"></div>
        </div>
        <div className="info-sec">
          <h1>{formData.name}</h1>
          <div className="job-title">sale Representtaitve</div>
          <div className="form-sec">
            <div className="border-botom">{formData.phoneNumber}</div>

            <div className="border-botom">{formData.emailAddress}</div>

            <div className="border-botom">{formData.webSite}</div>

            <div className="border-botom">{formData.location}</div>
          </div>
        </div>
        <button
          onClick={() => {
            setShowModal(!showModal);
            console.log(showModal);
            if(showModal===true){
                const modalSec = document.getElementById("modal");
                  modalSec.style.display = "flex";
                  setShowModal(true)
            }
          }}
          className="show-modal"
        >
          myInput
        </button>
      </div>
      <div
        className="top-sec"
        style={{
          backgroundColor: formData.colorTheme,
        }}
      >
        <div className="black-sec"></div>
      </div>
      <form
        onSubmit={handelSubmitForm}
        id="modal"
        className="modal-sec modal-sec-none"
      >
        <button
          id="close-modal"
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
        <input
          className="modal-sec-input"
          type=""
          placeholder="what is your name?"
        />
        <input
          className="modal-sec-input"
          type=""
          placeholder="what is your number?"
        />
        <input
          className="modal-sec-input"
          type="email"
          placeholder="what is your email?"
        />
        <input
          className="modal-sec-input"
          type="website"
          placeholder="what is your website?"
        />
        <input
          className="modal-sec-input"
          type="location"
          placeholder="where are you?"
        />
        <input type="file" name="image" id="image" />
        <input type="color" placeholder="theme" />
        <button id="submit" type="submit" className="submit-btn">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
