
// 內建模組

// 自訂模組

// 第三方模組
const express = require('express');

// =====================================================================

const PORT = 3000;

// 啟動 Express
const app = express();

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
