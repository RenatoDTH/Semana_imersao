import Head from 'next/head';
import { Container, Jumbotron } from 'reactstrap';
import Menu from '../components/Menu';

function Home() {
  return (
    <>
      <Head>
        <title>Home - Renato</title>
        <meta name="description" content="Site de ... sobre ..." />
        <meta name="author" content="Renato" />
      </Head>
      <Menu />
      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top {
          background-color: #000;
          color: #fed136;
          padding-top: 100px;
          padding-bottom: 50px;
          margin-bottom: 0rem !important;
        } .circulo {
          width: 140px;
          height: 140px;
          background-color: #fed136;
          font-size: 52px;
          padding-top: 24px;
          color: #fff;
        } .centralizar {
          margin: 0 auto !important;
          float: none !important;
        }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Título</h1>
          <p className="lead">Subtítulo</p>
          <p>
            <a href="#" className="btn btn-outline-warning btn-lg">
              Texto
            </a>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="servicos">
        <style>
          {`.servicos {
          background-color: #fff;
          padding-top: 80px;
          padding-bottom: 80px;
          margin-bottom: 0rem !important;
        }`}
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Título</h2>
            <p className="lead pb-4">Subtítulo</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">A</div>

              <h2 className="mt-4 mb-4">Serviço um</h2>
              <p>Descrição</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">B</div>
              <h2 className="mt-4 mb-4">Serviço um</h2>
              <p>Descrição</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle circulo centralizar">C</div>
              <h2 className="mt-4 mb-4">Serviço um</h2>
              <p>Descrição</p>
            </div>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
}

export default Home;
