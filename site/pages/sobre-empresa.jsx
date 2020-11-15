import Head from 'next/head';
import { Container, Jumbotron } from 'reactstrap';
import Menu from '../components/Menu';

function SobreEmpresa() {
  return (
    <>
      <Head>
        <title>Sobre Empresa - Renato</title>
        <meta name="description" content="Sobre a empresa..." />
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
          <h1 className="display-4">Sobre Empresa</h1>
        </Container>
      </Jumbotron>
    </>
  );
}

export default SobreEmpresa;
