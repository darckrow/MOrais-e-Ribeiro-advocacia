const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const readDataFromFile = (filename) => {
  try {
    const data = fs.readFileSync(filename, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Erro ao ler o arquivo JSON:", err);
    return [];
  }
};

const writeDataToFile = (filename, data) => {
  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Erro ao escrever no arquivo JSON:", err);
  }
};

app.post("/submit-form", (req, res) => {
  const formData = req.body;

  if (!formData.name || !formData.email) {
    return res.status(400).send("Nome e email são campos obrigatórios.");
  }

  const existingData = readDataFromFile("formData.json");
  existingData.push(formData);
  writeDataToFile("formData.json", existingData);

  res.send("Formulário enviado com sucesso!");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
