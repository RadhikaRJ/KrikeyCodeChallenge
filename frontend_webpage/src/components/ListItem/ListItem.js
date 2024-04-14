import React from "react";
import placeholderImage from "../../assets/avatar.svg";
import closeCircle from "../../assets/closeCircle.svg";
import "./ListItem.css";

const ListItem = ({ name, email }) => {
  return (
    <div className="listItem-container">
      <div className="leadingContent-container">
        <img src={placeholderImage} alt="Avatar" className="avatar-container" />
      </div>
      <div className="middleContent-container">
        <p className="name">{name}</p>
        <p className="email">{email}</p>
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
/*


 <div className="avatar-section">
        <div className="avatar-container">
          <img src={placeholderImage} alt="Avatar" className="avatar-image" />
        </div>
      </div>

      <div className="detail-section">
        <div className="detail-container">
          <div className="name-container">
            <strong>{name}</strong>
          </div>
          <div className="email-container">{email}</div>
        </div>
      </div>
*/
