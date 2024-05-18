const fs = require("fs");
const { createCanvas } = require("canvas");
const csv = require("csv-parser");

// Configurações do gráfico
const width = 800;
const height = 600;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// Função para desenhar o gráfico
function drawChart(dates, sales) {
  // Limpar o canvas
  ctx.clearRect(0, 0, width, height);

  // Título do gráfico
  ctx.font = "20px Arial";
  ctx.fillText("Sales Data", width / 2 - 50, 30);

  // Eixos
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(50, height - 50);
  ctx.lineTo(width - 50, height - 50);
  ctx.stroke();

  // Desenhar os dados
  const xStep = (width - 100) / (dates.length - 1);
  const yMax = Math.max(...sales);
  const yMin = Math.min(...sales);
  const yRange = yMax - yMin;

  ctx.beginPath();
  ctx.moveTo(50, height - 50 - ((sales[0] - yMin) / yRange) * (height - 100));
  sales.forEach((sale, index) => {
    const x = 50 + xStep * index;
    const y = height - 50 - ((sale - yMin) / yRange) * (height - 100);
    ctx.lineTo(x, y);
    ctx.arc(x, y, 3, 0, Math.PI * 2, true);
  });
  ctx.stroke();

  // Desenhar labels nos eixos
  ctx.font = "10px Arial";
  dates.forEach((date, index) => {
    const x = 50 + xStep * index;
    ctx.fillText(date, x - 15, height - 30);
  });

  sales.forEach((sale, index) => {
    const y = height - 50 - ((sale - yMin) / yRange) * (height - 100);
    ctx.fillText(sale.toFixed(2), 10, y + 5);
  });

  // Salvar o canvas como imagem
  const buffer = canvas.toBuffer("image/png");
  fs.writeFileSync("./sales_data_chart.png", buffer);
  console.log("Gráfico salvo como sales_data_chart.png");
}

// Ler o arquivo CSV e desenhar o gráfico
const results = [];
fs.createReadStream("./project_plot/sales_data.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results);

    const dates = results.map(row => row.Date);
    const sales = results.map(row => parseFloat(row.Sales));

    drawChart(dates, sales);
  });
// Cria uma imagem com o gráfico mas não mostra como no Python