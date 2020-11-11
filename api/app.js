import express from 'express';

const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose
  .connect('mongodb://localhost:27017/renato', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conexão ao mongo realizado com sucesso');
  })
  .catch((err) => {
    console.log(`Erro: Conexão com o mongo não realizado${err}`);
  });

app.get('/', (req, res) => {
  res.json({ name: 'Renato' });
});

app.listen(3333, () => {
  console.log('Servidor iniciado na porta 3333: http://localhost:3333');
});
