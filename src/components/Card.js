import React from "react";

/**
 * Componente que representa um Card para ser listado no Dashboard
 */
const Card = ({ srcImg, alt, title, type, date, description }) => {
  return (
    <div className="div-card">
      <figure>
        <div className="div-img">
          <img className="img-fluid img-card" alt={alt} src={srcImg} />
        </div>

        <div className="content">
          <h3 className="title">{title}</h3>
          <span>{type}</span>
          <span>{date}</span>
          <figcaption>{description}</figcaption>
        </div>
      </figure>
    </div>
  );
};

export default Card;
