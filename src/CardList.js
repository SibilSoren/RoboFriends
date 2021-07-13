import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardComponents = robots.map((user,index)=>{
        return <Card
        key={index}
        id={robots[index].id}
        roboName={robots[index].name}
        email={robots[index].email}
      />
    })
  return (
    <div className="row ml-2">
      {cardComponents}
    </div>
  );
};

export default CardList;
