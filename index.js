const ExcelJS = require('exceljs');
const fs = require('fs');

// Crie um novo objeto Workbook
const workbook = new ExcelJS.Workbook();

// Adicione uma planilha (worksheet) ao Workbook
const worksheet = workbook.addWorksheet('Planilha 1');

// Adicione dados à planilha
worksheet.columns = [
  { header: 'Nome', key: 'nome', width: 20 },
  { header: 'Idade', key: 'idade', width: 10 },
  { header: 'Email', key: 'email', width: 30 }
];

// Adicione linhas de dados
worksheet.addRow({ nome: 'João', idade: 30, email: 'joao@example.com' });
worksheet.addRow({ nome: 'Maria', idade: 28, email: 'maria@example.com' });

// Salve o Workbook em um arquivo
workbook.xlsx.writeFile('dados.xlsx')
  .then(() => {
    console.log('Arquivo Excel criado com sucesso!');
  })
  .catch((error) => {
    console.error('Erro ao criar o arquivo Excel:', error);
  });
