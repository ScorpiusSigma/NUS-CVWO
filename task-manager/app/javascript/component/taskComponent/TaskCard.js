import React from "react";
import "../../packs/index.css";
import DeleteTask from "./DeleteTask";

const taskCard = (props) => {
  const title = {
    fontWeight: "bold",
  };
  return (
    <div key={props.id} className="taskcard">
      <div>
        <div style={title}>Title:</div>
        <div>{props.title}</div>
        <br />
        <div style={title}>Body:</div>
        <div>{props.body}</div>
      </div>
      <div>
        <div className="button">Edit</div>
        <br />
        <DeleteTask id={props.id} />
      </div>
    </div>
  );
};

export default taskCard;
