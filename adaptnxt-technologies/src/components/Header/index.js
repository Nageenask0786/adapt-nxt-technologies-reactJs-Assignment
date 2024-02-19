import { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineTag } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

import { IoMoonOutline } from "react-icons/io5";
import { RiIndentDecrease } from "react-icons/ri";

import { IoIosNotificationsOutline } from "react-icons/io";

import "./index.css";

class Header extends Component {
  state = { isClicked: false };

  ToggleMenu = () => {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked }));
  };
  render() {
    const { isClicked } = this.state;
    return (
      <>
        <header>
          <div className="container">
            <img
              src="https://res.cloudinary.com/dchxbofyt/image/upload/v1708333286/logo-image_migqst.png"
              alt="logo"
              className="logo"
            />
            <button className="button" type="button">
              <RiIndentDecrease size={20} />
            </button>
          </div>
          <div className="container">
            <button
              className="button"
              type="button"
              style={{ margin: "0px 5px" }}
            >
              <IoMoonOutline size={20} />
            </button>
            <button
              className="button"
              type="button"
              style={{ margin: "0px 5px" }}
            >
              <IoIosNotificationsOutline size={20} />
            </button>
            <button
              className="button"
              type="button"
              style={{ margin: "0px 5px" }}
            >
              <img
                src="https://res.cloudinary.com/dchxbofyt/image/upload/v1708333046/react_assignment_1_cktar7.png"
                alt="icon"
                style={{ height: "50px" }}
              />
            </button>
            <img
              src="https://res.cloudinary.com/dchxbofyt/image/upload/v1698766606/Avatar_qtqou3.png"
              alt="avatar"
              className="avatar"
            />
            <button
              className="menu-button"
              type="button"
              style={{ margin: "0px 5px" }}
              onClick={this.ToggleMenu}
            >
              <IoIosMenu />
            </button>
          </div>
        </header>
        {isClicked && (
          <div className="menu">
            <div className="menu-bar">
              <ul className="menu-items">
                <Link to="/dashboard" className="nav-link">
                  <li className="menu-item">
                    <AiOutlineDashboard
                      size={20}
                      style={{ margin: "0px 20px 0px 20px" }}
                    />
                    <p className="menu-item">Dashboard</p>
                  </li>
                </Link>
                <Link to="/inventory" className="nav-link">
                  <li className="menu-item">
                    <AiOutlineTag
                      size={20}
                      style={{ margin: "0px 20px 0px 20px" }}
                    />
                    <p className="menu-item">Inventory</p>
                  </li>
                </Link>
                <Link to="/" className="nav-link">
                  <li className="menu-item active">
                    <BsCardList
                      size={20}
                      style={{ margin: "0px 10px 0px 10px" }}
                    />
                    <p className="item-name">Orders</p>
                  </li>
                </Link>
                <Link to="/shipping" className="nav-link">
                  <li className="menu-item">
                    <RiTruckLine
                      size={20}
                      style={{ margin: "0px 20px 0px 20px" }}
                    />
                    <p className="menu-item">Shipping</p>
                  </li>
                </Link>
                <Link to="/channel" className="nav-link">
                  <li className="menu-item">
                    <IoShareSocialOutline
                      size={20}
                      style={{ margin: "0px 20px 0px 20px" }}
                    />
                    <p className="menu-item">Channel</p>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Header;
