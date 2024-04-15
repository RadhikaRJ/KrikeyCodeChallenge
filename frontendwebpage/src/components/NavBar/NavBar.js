import "./Navbar.css";
import chevrondown from "../../assets/chevron-down.svg";
import vector10 from "../../assets/Vector10.png";
import vector9 from "../../assets/Vector9.png";
import vector11 from "../../assets/Vector11.png";
const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content-container">
        <div className="logo-container">
          <div className="krikeyAILogo">
            <img src={vector9} className="vector9" alt="vector9" />
            <img src={vector11} className="vector11" alt="vector11" />
            <img src={vector10} className="vector10" alt="vector10" />
          </div>
        </div>
        <div className="menu-container">
          <div className="item1">
            <button className="button button1">How to Animate</button>
            <span className="badge-container">
              <img
                src={chevrondown}
                alt="chevrondown"
                className="chevrondown"
              />
            </span>
          </div>
          <div className="item6">
            <button className="button button6">Business</button>
            <span className="badge-container">
              <img
                src={chevrondown}
                alt="chevrondown"
                className="chevrondown"
              />
            </span>
          </div>
          <div className="item7">
            <button className="button button7">Education</button>
            <span className="badge-container">
              <img
                src={chevrondown}
                alt="chevrondown"
                className="chevrondown"
              />
            </span>
          </div>
          <div className="item8">
            <button className="button button8">Social Media</button>
            <span className="badge-container">
              <img
                src={chevrondown}
                alt="chevrondown"
                className="chevrondown"
              />
            </span>
          </div>
          <div className="item2">
            <button className="button button2">Pricing</button>
          </div>
          <div className="item5">
            <button className="button button5">About Us</button>
          </div>
        </div>
        <div className="navbarTrailingContent-container">
          <button className="trailNavButton">Get Started</button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
