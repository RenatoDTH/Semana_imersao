import express from 'express';

import mongoose from 'mongoose';
import './models/home';
import './models/contato';
import cors from 'cors';

const Home = mongoose.model('Home');
const Contato = mongoose.model('Contato');

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'X-PINGOTHER',
    'Content-Type, Authorization'
  );
  app.use(cors());
  next();
});

mongoose
  .connect('mongodb://localhost:27017/renato', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conexão ao mongo realizado com sucesso');
  })
  .catch((err) => {
    console.log(`Erro: Conexão com o mongo não realizado: ${err}`);
  });

app.get('/home', async (req, res) => {
  await Home.findOne({})
    .then((home) => {
      return res.json({
        error: false,
        home,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        error: true,
        message: `Nenhum registro encontrado: ${err}`,
      });
    });
});

app.post('/home', async (req, res) => {
  const homeExist = await Home.findOne({});
  if (homeExist) {
    return res.status(400).json({
      error: true,
      message: 'Erro: A página Home já possui um registro!.',
    });
  }

  await Home.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Erro: Conteúdo da página home não cadastrado com sucesso.',
      });
  });
  return res.json({
    error: false,
    message: 'Conteúdo da página home cadastrado com sucesso.',
  });
});

app.post('/contato', async (req, res) => {
  await Contato.create(req.body, (err) => {
    if (err)
      return res.status(400).json({
        error: true,
        message: 'Erro: Mensagem de contato não cadastrada com sucesso!',
      });
  });
  return res.json({
    error: false,
    message: 'Mensagem de contato cadastrada com sucesso!',
  });
});

app.listen(3333, () => {
  console.log('Servidor iniciado na porta 3333: http://localhost:3333');
});
