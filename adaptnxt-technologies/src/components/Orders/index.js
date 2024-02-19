import { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { IoIosClose } from "react-icons/io";
import { GrFormPrevious} from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";



import Header from '../Header'
import SideBar from '../SideBar'

import './index.css'
import TabItem from '../TabItem';


const tabsList = [{
  id : uuidv4(),
  name : "Pending"
},
{
  id : uuidv4(),
  name : "Accepted"
},{
  id : uuidv4(),
  name : "AWB Created"
},{
  id : uuidv4(),
  name : "Ready to Ship"
},{
  id : uuidv4(),
  name : "Shipped"
},{
  id : uuidv4(),
  name : "Completed"
},
{
  id : uuidv4(),
  name : "Cancelled"
}]

const ordersList = [{
  id : uuidv4(),
  channel : "https://res.cloudinary.com/dchxbofyt/image/upload/v1708323662/channel_vphixw.png",
  orderNo : "#TKN20203754",
  orderDate : "2022-05-04",
  city : "Lucknow",
  customerName : "Abhishek Dixit",
  orderValue : "0.00",
  status : "Pending",
  operation : "Action"
},
{
  id : uuidv4(),
  channel : "https://res.cloudinary.com/dchxbofyt/image/upload/v1708323662/channel_vphixw.png",
  orderNo : "#TKN20203753",
  orderDate : "2022-05-04",
  city : "Lucknow",
  customerName : "Abhishek Dixit",
  orderValue : "0.00",
  status : "Pending",
  operation : "Action"
},
{
  id : uuidv4(),
  channel : "https://res.cloudinary.com/dchxbofyt/image/upload/v1708323662/channel_vphixw.png",
  orderNo : "#TKN20203752",
  orderDate : "2022-05-04",
  city : "Lucknow",
  customerName : "Abhishek Dixit",
  orderValue : "0.00",
  status : "Pending",
  operation : "Action"
}]
class Orders extends Component {
  state = {activeTab : tabsList[0].id}

  changeActiveTabId = (value) => {
    this.setState({activeTab : value})
  }
  render() {
    const {activeTab} = this.state 
    
    console.log(activeTab)
    return (
      <div>
      <Header />
      
      <div className = "flex">
     
      <SideBar />
      
        <div className="orders">
             <button type='button' className='orders-btn'><span>Orders</span> <IoIosClose size={15} /></button>
        <ul className='tabslist'>
          {tabsList.map((eachItem)=>
            <TabItem tabDetails = {eachItem} key = {eachItem.id} changeActiveTabId = {this.changeActiveTabId}
              isActive = {activeTab === eachItem.id}
            />
          )}
        </ul>
        <table className='order-items-container'>
        <thead>
        <tr>
        <th><input type='checkbox' /></th>
        <th>Channel</th>
        <th>Order Number</th>
        <th style={{margin : "0px 0px 0px 0px"}}>Order Date</th>
        <th>City</th>
        <th >Customer Name</th>
        <th >Order Value</th>
        <th >Status</th>
        <th style = {{marginRight : "15px"}}>Operation</th>
        </tr>
        </thead>
        <tbody>
          {ordersList.map((eachItem)=>(
            <tr key = {eachItem.id}>
            <td style={{marginLeft : "30px"}}><input type='checkbox'/></td>
              <td><img src = {eachItem.channel}  alt = "channel" className='channel'/></td>
              <td>{eachItem.orderNo}</td>
              <td>{eachItem.orderDate}</td>
              <td>{eachItem.city}</td>
              <td style={{margin : "0px 3px 0px 0px"}}>{eachItem.customerName}</td>
              <td>{eachItem.orderValue}</td>
              <td className='status' style = {{margin : " 0px 5px 0px 35px"}}>{eachItem.status}</td>
              <td style = {{marginRight : "15px"}}><select><option>{eachItem.operation}</option></select></td>
            </tr>
          ))}
        </tbody>
        
        </table> 
        <div className='pagination-buttons'>
          <button type='button'><GrFormPrevious/></button>
          <button type='button'>1</button>
          <button type='button'><MdNavigateNext /></button>
          <button style={{width : "90px"}} type='button'>20 Pages</button>
        
        </div>
        </div>
        </div>
      </div>
    )
  }
}


export default Orders