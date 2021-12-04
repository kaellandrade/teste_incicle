import React from "react";
import Container from "../layouts/Container";
import Column from "../layouts/Column";
import Row from "../layouts/Row";

/**
 * Componente que representa um Card para ser listado no Dashboard
 */
const Card = ({ srcImg, alt, title, type, date, description }) => {
  return (
    <div className="div-card">
      <figure>
        <Container className="container">
          <Row>
            <Column classStyle="col-3 col-md-2">
              <div className="div-img">
                <img className="img-fluid img-card" alt={alt} src={srcImg} />
              </div>
            </Column>
            <Column classStyle="col-9 col-md-10">
              <div className="content">
                <h3 className="title">{title}</h3>
                <span className={type}>{type.toUpperCase()} </span>
                <span>{date}</span>
                <figcaption>{description}</figcaption>
              </div>
            </Column>
          </Row>
        </Container>
      </figure>
    </div>
  );
};

export default Card;
