import React, { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "../ListItem/ListItem";
import arrowLeft from "../../assets/arrowleft.svg";
import "./webpage.css";

const WebPage = () => {
  //Define state to store the fetched data
  const [data, setData] = useState(null);

  useEffect(() => {
    //fetching data from the API endpoint
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/topAuthors");
        setData(response.data);
        console.log(data);
        console.log(data.length);
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    //Call to the getData function
    getData();
  }, []); // setting the dependency array as empty so that the effect runs only once when the component mounts
  return (
    <div className="frame18-container">
      <div className="frame17-container">
        <div className="arrowLeft">
          <img src={arrowLeft} alt="arrowLeft" className="vector" />
        </div>
        {/* Render team members count only when data is not null */}
        {data && (
          <div className="teamMemberText">
            You have {data.length} Team Members
          </div>
        )}
      </div>

      {data ? (
        <div className="frame16-container">
          {data.map((author, index) => (
            <ListItem key={index} name={author.name} email={author.email} />
          ))}
        </div>
      ) : (
        <p>Loading data ...</p>
      )}
    </div>
  );
};

export default WebPage;
