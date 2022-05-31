// 內建模組
const path = require('path');

// 第三方模組
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const Sequelize = require('sequelize'); 

// 自訂模組

// =====================================================================

// 變數
const PORT = 3000;

// 使用 Express
const app = express();

// 使用 cors
app.use(cors());

app.get('/test', (req, res) => {
  res.status(200).json({success : "true"})
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
