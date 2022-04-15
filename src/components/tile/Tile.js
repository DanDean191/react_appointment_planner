import React from "react";

export const Tile = ({tile}) => {
  // console.log(contact)
  const tileArr = Object.values(tile)

  return (
    <div className="tile-container">
      { tileArr.map((item,key) => {
          return key === 0 ? 
            <p key={key} className={"tile-title"}>{item}</p> : 
            <p key={key} className={"tile"}>{item}</p>
        }) }
    </div>
  );
};