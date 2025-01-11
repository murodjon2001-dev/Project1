import React from "react";

const Cards = (props) => {
  return (
    <div className="card">

      <div className="card-body">
        <p>{props.body}</p>
      </div>

      <div className="card-footer">
        <h3>User id: {props.userId}</h3>
        <h2>{props.title}</h2>
      </div>

    </div>
  );
};

export default Cards;
