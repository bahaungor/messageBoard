const express = require('express')
const router = express.Router()

const boardTitle = 'Message From Visitors:'
const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

// when homepage requested, render index.ejs 
router.get('/', function(req, res) { 
  res.render(
    'pages/index',
    {title: boardTitle, messages: messages});
});

// when /new requested, render form.ejs 
router.get('/new', function(req, res) {
  res.render('pages/form');
});

// when /new posted, push new message
router.post('/new', function(req, res) {
    messages.push({
      text: req.body.message, 
      user: req.body.user, 
      added: new Date()});
    res.redirect('/')
  });

module.exports = router