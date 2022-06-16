const path = require('path');
const rootPath = path.resolve(__dirname,'..');

// =================================================================================
module.exports = (req, res, next) => {
  if (req.session.email) {
    res.status(200).sendFile(path.join(rootPath, 'dist', 'index.html'));
    next();
  } else {
    res.status(200).sendFile(path.join(rootPath, 'dist', 'index.html'));
  };
};
