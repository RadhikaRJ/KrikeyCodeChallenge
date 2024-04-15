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
        if (
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1"
        ) {
          const response = await axios.get("http://localhost:3000/topAuthors");
          setData(response.data);
        } else {
          setData([
            {
              name: "Lorelai Gilmore",
              email: "lorelai@example.com",
              total_revenue: "$1,300.00",
            },
            {
              name: "Aragorn",
              email: "aragorn@example.com",
              total_revenue: "$960.00",
            },
            {
              name: "Gimli",
              email: "gimli@example.com",
              total_revenue: "$900.00",
            },
            {
              name: "Sauron",
              email: "sauron@example.com",
              total_revenue: "$840.00",
            },
            {
              name: "Saruman",
              email: "saruman@example.com",
              total_revenue: "$660.00",
            },
            {
              name: "Elrond",
              email: "elrond@example.com",
              total_revenue: "$480.00",
            },
            {
              name: "Gollum",
              email: "gollum@example.com",
              total_revenue: "$400.00",
            },
            {
              name: "Frodo Baggins",
              email: "frodo@example.com",
              total_revenue: "$280.00",
            },
            {
              name: "Ron Weasley",
              email: "ron@example.com",
              total_revenue: "$240.00",
            },
            {
              name: "Galadriel",
              email: "galadriel@example.com",
              total_revenue: "$230.00",
            },
          ]);
        }
      } catch (error) {
        console.log("Error fetching data:", error.message);
      }
    };

    //Call to the getData function
    getData();
  }, []);
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
