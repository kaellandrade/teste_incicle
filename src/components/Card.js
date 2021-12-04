import React from "react";
import Container from "../layouts/Container";
import Column from "../layouts/Column";
import Row from "../layouts/Row";
import IconButton from "../components/IconButton";

/**
 * Componente que representa um Card para ser listado no Dashboard
 */
const Card = ({ srcImg, alt, title, type, date, description }) => {
  return (
    <div className="div-card">
      <figure>
        <Container className="container">
          <Row className="d-flex align-items-center">
            <Column classStyle="col-3 col-md-2">
              <div className="div-img">
                <img className="img-fluid img-card" alt={alt} src={srcImg} />
              </div>
            </Column>
            <Column classStyle="col-9 col-md-10">
              <div className="content">
                <h3 className="title-card">{title}</h3>
                <span className={type}>{type.toUpperCase()} </span>
                <span className="date">{date}</span>
                <figcaption>{description}</figcaption>
              </div>
            </Column>
          </Row>
        </Container>
      </figure>
      <IconButton className='btn-card' icon='fas fa-ellipsis-h'/>
    </div>
  );
};

export default Card;
