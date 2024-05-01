const express = require('express');
const fs = require('fs');
const cors = require('cors'); // Importe o pacote 'cors'

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // Use o middleware 'cors' para permitir solicitações de origens diferentes

// Rota para lidar com o envio do formulário
app.post('/submit-form', (req, res) => {
  // Obter os dados do formulário do corpo da solicitação
  const formData = req.body;

  // Carregar os dados existentes do arquivo JSON, se houver
  let existingData = [];
  try {
    existingData = JSON.parse(fs.readFileSync('formData.json', 'utf8'));
  } catch (err) {
    console.error('Erro ao ler o arquivo JSON:', err);
  }

  // Adicionar os novos dados ao array existente
  existingData.push(formData);

  // Escrever os dados atualizados de volta para o arquivo JSON
  fs.writeFileSync('formData.json', JSON.stringify(existingData, null, 2));

  res.send('Formulário enviado com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});