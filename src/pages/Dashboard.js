import React, { Fragment } from "react";
import DADOS from "../data/data.json";
import Card from "../components/Card";
import Container from "../layouts/Container";
import Column from "../layouts/Column";
import Row from "../layouts/Row";
import CardInfo from "../components/CardInfo";
import ManagementBoard from "../components/ManagementBoard";
import CardVisit from "../components/CardVisit";
import SelectComponent from "../components/SelectComponent";
import IconButton from "../components/IconButton";
/**
 * Função responsável por gerar um componente Card
 * através dos dados de entrada.
 */
const renderCard = ({ data }) => {
  return data.map(({ title, description, type, date, files }, index) => {
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
            <Column classStyle="col-12 col-md-12 col-lg-8">
              <Row className='mb-2'>
                <Column classStyle="col-4">
                  <h1 className='title'>Endomarketing</h1>
                </Column>
                <Column classStyle="col-8 d-flex justify-content-end align-self-center">
                  <SelectComponent
                    className="select-component"
                    name="marketing"
                    id="market"
                    options={[
                      { value: "1", text: "TIPO" },
                      { value: "2", text: "RELEASE" },
                      { value: "2", text: "EVENT" },
                    ]}
                  />
                  <IconButton
                    className="btn btn-primary"
                    icon="fas fa-plus"
                    text="CRIAR "
                  />
                </Column>
              </Row>

              <div className="events">{renderCard(DADOS)}</div>
            </Column>
            <Column classStyle="col-12 col-md-12 col-lg-4">
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
