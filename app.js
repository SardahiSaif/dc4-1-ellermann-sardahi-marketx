const express = require('express');

const app = express();

module.exports = app;

const campaigns = [
  {
    name: "Super Promo",
    description: "Des réductions incroyables sur tous nos produits !",
    startDate: "2023-08-01",
    endDate: "2023-09-31",
    budget: 10000
  },
  {
    name: "Solde d'hiver",
    description: "Pensez cadeau de Noel !",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    budget: 5000
  },
  {
    name: "Black Friday",
    description: "Le Week-End à ne pas loupé !",
    startDate: "2023-11-24",
    endDate: "2023-11-26",
    budget: 2000
  },
];

app.get('/api/campaigns', (req, res) => {
  res.status(200).json(campaigns);
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Le serveur écoute sur le port ${PORT}, prêt à répandre des campagnes !`));