import React from "react";

const ManagementBoard = ({ children, title }) => {
  return (
    <div className="card-Management">
      <h5 className='title-managementBoard'>{title}</h5>
      <div>{children}</div>
    </div>
  );
};
export default ManagementBoard;
