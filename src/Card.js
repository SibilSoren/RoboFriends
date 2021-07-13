import React from "react";
import "./Card.css";

const Card = (props) => {
  const { id, roboName, email } = props;
  return (
    
      <div className="container cardItem p-3 mt-2 grow">
        <img src={`https://robohash.org/${id}`} alt="roboimage"></img>
        <div>
          <h2 className='text-center mt-4'>{roboName}</h2>
          <p className='text-center'>{email}</p>
        </div>
      </div>
    
  );
};

export default Card;
