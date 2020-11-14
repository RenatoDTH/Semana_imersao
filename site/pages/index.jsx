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
        }`}
      </style>
      <Container className="text-center">
        <h1 className="display-4" >Título</h1>
        <p className="lead">Subtítulo</p>
        <p>
          <a href="#" className="btn btn-outline-warning btn-lg">
            Texto
          </a>
        </p>
      </Container>
    </Jumbotron>
    </>
  );
}

export default Home;
