import { Component } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDashboard, AiOutlineTag } from "react-icons/ai";
import { BsCardList } from "react-icons/bs";
import { RiTruckLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import "./index.css";

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <ul className="side-bar-items">
          <Link to="/dashboard" className="nav-link">
            <li className="side-bar-item">
              <AiOutlineDashboard size={20} style={{ marginLeft: "20px" }} />
              <p className="item-name">Dashboard</p>
            </li>
          </Link>
          <Link to="/inventory">
            <li className="side-bar-item">
              <AiOutlineTag size={20} style={{ marginLeft: "20px" }} />
              <p className="item-name">Inventory</p>
            </li>
          </Link>
          <Link to="/" className="nav-link">
            <li className="side-bar-item active">
              <BsCardList size={20} style={{ marginLeft: "20px" }} />
              <p className="item-name">Orders</p>
            </li>
          </Link>
          <Link to="/shipping" className="nav-link">
            <li className="side-bar-item">
              <RiTruckLine size={20} style={{ marginLeft: "20px" }} />
              <p className="item-name">Shipping</p>
            </li>
          </Link>
          <Link to="/channel" className="nav-link">
            <li className="side-bar-item">
              <IoShareSocialOutline size={20} style={{ marginLeft: "20px" }} />
              <p className="item-name">Channel</p>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default SideBar;
