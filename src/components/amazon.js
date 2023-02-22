import React, { useState } from "react";
import list from "./data";
import Cards from "./card";
import "./Amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <div className="q">
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Amazon;