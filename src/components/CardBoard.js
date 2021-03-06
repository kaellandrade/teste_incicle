import React from "react";
import IconButton from "../components/IconButton";

/**
 * Cards do componente Board.
 */
const CardBoard = _ => {
  return (
    <div className="demo">
      <div className='title-commercial d-flex align-items-center'>
        <small>Demonstrativo comercial</small>
        <div className="button-group">
          <IconButton className="btn-demo" icon="fas fa-globe-asia" />
          <IconButton className="btn-demo" icon="fas fa-ellipsis-h" />
        </div>
      </div>
      <div className="img-demo">
        <img
          alt="Random"
          src="https://source.unsplash.com/random/55x55/?management,team,solution"
        />
        <img
          alt="Random"
          src="https://source.unsplash.com/random/55x55/?solution,ecommerce,technology"
        />
        <img
          alt="Random"
          src="https://source.unsplash.com/random/55x55/?graph,team,finances"
        />
        <img
          alt="Random"
          src="https://source.unsplash.com/random/55x55/?software,computers,meet"
        />
      </div>
    </div>
  );
};

export default CardBoard;
