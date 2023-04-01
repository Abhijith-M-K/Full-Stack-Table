import React from "react";
import "./Home.css";
import CompletedOrderTable from "../../Components/CompleteTable/CompleteTable";
import PendingOrderTable from "../../Components/PendingTable/PendingTable";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();
  const navigateToAddOrders = () => {
    // 👇 navigate to /contacts
    navigate("/order");
  };
  return (
    <div className="container">
      <div className="nav">
        <div className="btn">
          <button className="add" onClick={navigateToAddOrders}>Add</button>
        </div>
      </div>
      <div className="pending">
        <PendingOrderTable/>
      </div>
      <div className="completed">
        <CompletedOrderTable/>
      </div>
    </div>
  );
};

export default Home;
