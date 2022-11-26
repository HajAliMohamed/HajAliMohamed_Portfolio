import React, { useEffect, useRef, useState } from "react";
import "./style/contact.scss";
import Header from "../Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import MobileNav from "../Header/MobileNav";
import {
  faExternalLinkSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
function Contact() {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }

  function handleClose() {
    setOpen(!open);
  }

  const [message, setMessage] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setMessage((prevMessage) => {
      return {
        ...prevMessage,
        [name]: value,
      };
    });
  }

  const popup = useRef("popup");
  useEffect(() => {
    popup.current.style.transform = "translateY(-200%)";
  });

  function show() {
    popup.current.style.transform = "translateY(0%)";
  }

  function handleSubmit(e) {
    axios
      .post("https://mohamedhajali.pythonanywhere.com/sendMessage/", message, {
        "Access-Control-Allow-Origin":
          "https://hajalimohamed.github.io/HajAliMohamed_Portfolio/",
        "Access-Control-Allow-Headers":
          "Content-Type , Authorization, X-Requested-With",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "application/json",
      })
      .then((res) => {
        if (res.status === 200) {
          show();
        }
      });
    setMessage({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    });
    e.preventDefault();
  }

  function hide() {
    popup.current.style.transform = "translateY(-200%)";
  }

  return (
    <div className="contact_conatiner">
      <MobileNav isClicked={open} close={handleClose} />
      <Header click={handleOpen} />
      <div className="success_sent" ref={popup}>
        <FontAwesomeIcon icon={faXmark} onClick={hide} />
        <p>your message has been sent successfully</p>
      </div>
      <div className="bg"></div>
      <div className="contact_hero">
        <div className="contact_desc">
          <h1>let's get in touch</h1>
          <p>
            if you need my help or you have a good idea for a project, contact
            me and let's get it done.
          </p>
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/hajalimohamed/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.facebook.com/mohamedlhajali.16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://github.com/HajAliMohamed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.frontendmentor.io/profile/HajAliMohamed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkSquare} />
            </a>
          </div>
        </div>
        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <input
              name="first_name"
              type="text"
              placeholder="first name*"
              autoFocus
              required
              onChange={handleChange}
              value={message.first_name}
            />
            <input
              name="last_name"
              type="text"
              placeholder="last name*"
              required
              onChange={handleChange}
              value={message.last_name}
            />
            <input
              name="email"
              type="email"
              placeholder="email*"
              required
              onChange={handleChange}
              value={message.email}
            />
            <input
              name="message"
              type="text"
              placeholder="message*"
              required
              onChange={handleChange}
              value={message.message}
            />
            <input name="" type="submit" value="Send" required />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
