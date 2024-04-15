import React from "react";
import closeCircle from "../../assets/closeCircle.svg";
import "./ListItem.css";

const ListItem = ({ name, email }) => {
  return (
    <div className="listItem-container">
      <div className="leadingContent-container">
        <div className="avatar-container"></div>
      </div>
      <div className="middleContent-container">
        <span className="nameClass">{name}</span>
        <span className="emailClass">{email}</span>
      </div>
      <div className="trailingContent-container">
        <div className="closeCircle-container">
          <img src={closeCircle} alt="closeCircle" className="xCircle" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
