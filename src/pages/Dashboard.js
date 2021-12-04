import React, { Fragment } from "react";
import Card from "../components/Card";
import Container from "../layouts/Container";
import Column from "../layouts/Column";
import Row from "../layouts/Row";
import CardInfo from "../components/CardInfo";

/**
 * Tela principal listagem dos dados.
 */
const Dashboard = (_) => {
  return (
    <Fragment>
      <section className="page-events pt-4">
        <Container Classname="container">
          <Row>
            <Column classStyle="col-12 col-lg-9">
              <div className="events">
                <Card
                  title="Geral dispensado para curtir o feriado"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindut..."
                  type="release"
                  srcImg="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                  date="15 OUT"
                />
                <Card
                  title="Geral dispensado para curtir o feriado"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidindut..."
                  type="event"
                  srcImg="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
                  date="15 OUT"
                />
              </div>
            </Column>
            <Column classStyle="col-12 col-lg-3">
              <div className="side-bar">
                <CardInfo title="Endormarketing">
                  Endomarketing está relacionado às ações de treinamento ou
                  qualificação dos colaboradoresda empresa visndo um melhor
                  serviço para o cliente. Marketing interno, devido ao nome, é
                  usualmente confundido com Endomarketing mesmo sendo conceitos
                  diferentes.
                </CardInfo>
              </div>
            </Column>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Dashboard;
