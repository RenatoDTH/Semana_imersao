import Head from 'next/head';
import {
  Button,
  Container,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
} from 'reactstrap';
import { useCallback, useState } from 'react';
import Rodape from '../components/Rodape';
import Menu from '../components/Menu';

function Contato() {
  const [contato, setContato] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  });

  const [response, setResponse] = useState({
    formSave: false,
    type: '',
    message: '',
  });

  const onChangeInput = useCallback(
    (e) => {
      setContato({
        ...contato,
        [e.target.name]: e.target.value,
      });
    },
    [contato],
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      setResponse({ formSave: true });

      try {
        const res = await fetch('http://localhost:3333/contato', {
          method: 'POST',
          body: JSON.stringify(contato),
          headers: { 'Content-Type': 'application/json' },
        });

        const responseEnv = await res.json();
        if (responseEnv.error) {
          setResponse({
            formSave: false,
            type: 'error',
            message: responseEnv.message,
          });
        } else {
          setResponse({
            formSave: false,
            type: 'success',
            message: responseEnv.message,
          });
        }
      } catch (err) {
        setResponse({
          formSave: false,
          type: 'error',
          message: 'Erro: Mensagem não enviada com sucesso, tente mais tarde.',
        });
      }
    },
    [contato],
  );

  return (
    <>
      <Head>
        <title>Contato - Renato</title>
        <meta name="description" content="Contato com a empresa" />
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
          <h1 className="display-4">Contato</h1>
        </Container>
      </Jumbotron>

      <Jumbotron fluid className="form-contato">
        <style>
          {`.form-contato{
            padding-top: 80px;
            padding-bottom: 80px;
            background-color: #fff;
            margin-bottom: 0rem !important;
          }`}
        </style>
        <Container>
          {response.type === 'error' ? (
            <div className="alert alert-danger">{response.message}</div>
          ) : (
            ''
          )}
          {response.type === 'success' ? (
            <div className="alert alert-success">{response.message}</div>
          ) : (
            ''
          )}
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Nome completo"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="subject">Assunto</Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                placeholder="Assunto da mensagem"
                onChange={onChangeInput}
              />
            </FormGroup>

            <FormGroup>
              <Label for="content">Conteúdo</Label>
              <Input
                type="textarea"
                name="content"
                id="content"
                placeholder="Conteúdo da mensagem"
                onChange={onChangeInput}
              />
            </FormGroup>

            {response.formSave ? (
              <Button type="submit" outline color="warning" disabled>
                Enviando...
              </Button>
            ) : (
              <Button type="submit" outline color="warning">
                Enviar
              </Button>
            )}
          </Form>
        </Container>
      </Jumbotron>

      <Rodape />
    </>
  );
}

export default Contato;
