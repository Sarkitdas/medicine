import React, { useState } from "react";
import './contact.css';


function contact()
{
  return (
    <div className="container">
    <form>
      <div className="container-title">
        <input type="text" placeholder="Your name" id="title"/>
      </div>
      <div className="container-title">
        <input type="email" placeholder="Email" id="title"/>
      </div>
      <div className="container-title">
        <textarea
          placeholder="Your message" id="message"/>
      </div>
      <div className="container-title">
        <button type="submit">Send message</button>
      </div>
    </form>
    </div>
  );
};
export default contact;