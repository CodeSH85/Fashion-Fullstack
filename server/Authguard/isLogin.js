const path = require('path');
module.exports = (req, res, next) => {
  if (!req.session.email) {
    console.log('not authenticated')
    res.redirect("/login")
  }
  next() 
}
