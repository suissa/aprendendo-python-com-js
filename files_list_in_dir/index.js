const fs = require('fs');

fs.readdir('./', (err, files) => {
  if (err) {
    console.error('Erro ao ler o diretório:', err);
    return;
  }
  
  console.log('Arquivos no diretório:');
  files.forEach(file => {
    console.log(file);
  });
});
