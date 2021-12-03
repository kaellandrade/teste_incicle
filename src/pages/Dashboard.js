import React, { Fragment } from "react";
import Card from "../components/Card";
/**
 * Tela principal listagem dos dados.
 */
const Dashboard = (_) => {
  return (
    <Fragment>
      <section className='page-events'>
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
            type="release"
            srcImg="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
            date="15 OUT"
          />
        </div>

        <div className="side-bar"></div>
      </section>
    </Fragment>
  );
};

export default Dashboard;
