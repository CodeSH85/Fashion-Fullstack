// 內建模組
const path = require('path');

// 第三方模組
const express = require('express');
const bodyParser = require('body-parser');

// 自訂模組

// =====================================================================

const PORT = 3000;

const app = express();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
