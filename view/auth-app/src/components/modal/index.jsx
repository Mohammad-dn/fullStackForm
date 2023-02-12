import React, { useEffect } from "react";

function ModalForAdd(props) {
  const [showModal, setShowModal] = React.useState(true);
  const [formData, setFormData] = React.useState([]);
  console.log(showModal);
  const handelShowModal = () => {
    const modalSec = document.getElementById("modal");
    modalSec.style.display = "none";
  };
  const handelHideModal = () => {
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
    const avatar = document.getElementsByTagName("input")[4].value;
    const colorTheme = document.getElementsByTagName("input")[5].value;
    setFormData([
      phoneNumber,
      emailAddress,
      webSite,
      location,
      avatar,
      colorTheme,
    ]);
    console.log(formData);
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
        colorTheme,
        avatar,
      }),
    });
  };
  return (
    <form
      onSubmit={handelSubmitForm}
      id="modal"
      className="modal-sec modal-sec-none"
    >
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
  );
}

export default ModalForAdd;
