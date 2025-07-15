const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Servir arquivos estáticos (caso você adicione CSS/JS externos depois)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal serve o HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/portaldiretor.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${PORT}`);
});
