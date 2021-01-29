const express = require('express');
const router = express.Router();

// Welcome Page
router.get('/', (req, res) => res.render('about'));

// Dashboard
router.get('/portfolio', (req, res) =>
  res.render('portfolio', {
    user: req.user
  })
);

router.get('/about', (req, res) =>
  res.render('about', {
    user: req.user
  })
);

router.get('/contact', (req, res) =>
  res.render('contact', {
    user: req.user
  })
);

router.get('/realestate', (req, res) =>
  res.render('realestate', {
    user: req.user
  })
);

module.exports = router;