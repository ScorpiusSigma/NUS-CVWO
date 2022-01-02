import React from "react";
import "../../packs/index.css";
import DeleteTaskButton from "./DeleteTaskButton";
import EditTaskButton from "./EditTaskButton";

const taskCard = (props) => {
  const title = {
    fontWeight: "bold",
  };
  return (
    <div key={props.id} className="task-card">
      <div>
        <div style={title}>Title:</div>
        <div>{props.title}</div>
        <br />
        <div style={title}>Category:</div>
        <div>{props.category}</div>
        <br />
        <div style={title}>Body:</div>
        <div>{props.body}</div>
      </div>
      <div>
        <EditTaskButton id={props.id} />
        <br />
        <DeleteTaskButton id={props.id} />
      </div>
    </div>
  );
};

export default taskCard;
