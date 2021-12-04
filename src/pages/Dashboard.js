import React, { Fragment } from "react";
import Card from "../components/Card";
import Container from "../layouts/Container";
import Column from "../layouts/Column";
import Row from "../layouts/Row";
import CardInfo from "../components/CardInfo";
import ManagementBoard from "../components/ManagementBoard";
import CardVisit from "../components/CardVisit";
import DADOS from "../data/data.json";

/**
 * Função responsável por gerar um componente Card
 * através dos dados de entrada.
 */
const renderCard = ({ data }) => {
  return data.map(({ title, description, type, date, files, id }, index) => {
    return (
      <Card
        title={title}
        description={description}
        type={type}
        srcImg={files[0].file}
        date={date}
        key={index}
      />
    );
  });
};

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
                {renderCard(DADOS)}
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
                <ManagementBoard title="Quadros de Gestão à vista">
                  <CardVisit />
                  <CardVisit />
                  <CardVisit />
                </ManagementBoard>
              </div>
            </Column>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default Dashboard;
