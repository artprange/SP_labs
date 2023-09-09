import React, { useState } from "react";
import axios from "axios";
import LargeBtn from "./../UI/LargeButton/LargeBtn";

function ContactData() {
  const [data, setData] = useState({});

  const postData = async () => {
    try {
      const response = await axios.post(
        "https://sp-labs.vercel.app/api/contact",
        {
          {name}
        }
      );
      setData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <LargeBtn onClick={postData}></LargeBtn>
    </div>
  );
}

export default ContactData;
