//Importing dependencies.
const express = require('express');
const cors = require('cors');

require('dotenv').config({
  path: __dirname + './../.env',
});

//Importing middlewares
const authenticateApiKey = require('./middleware/AuthenticateApiKey');
const { client } = require('./databasepg');

const app = express();
const PORT = 3001;

//Cors import & options
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

client.connect();

//GET ALL CLOTHES
app.get('/v1/clothes/todos', authenticateApiKey, async (req, res) => {
  try {
    const sortQuery = req.query.sort;

    let query =
      'SELECT "clothes_id", "clothes_name", "clothes_description", "clothes_material", "clothes_price", "clothes_gender", "clothes_image", "clothes_category" FROM "Clothes"';

    if (sortQuery) {
      if (sortQuery === 'por-precio-mas-bajo') {
        query = query + ' ORDER BY "clothes_price" ASC';
      } else {
        query = query + ' ORDER BY "clothes_price" DESC';
      }
    }

    const data = (await client.query(query)).rows;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: 'Internal server error.',
      error: error,
    });
  }
});

//GET CLOTHES BY PARAM
app.get('/v1/clothes/:param', authenticateApiKey, async (req, res) => {
  try {
    const param = req.params.param;
    const sortQuery = req.query.sort;

    //Default query
    let query =
      'SELECT "clothes_id", "clothes_name", "clothes_description", "clothes_material", "clothes_price", "clothes_gender", "clothes_image", "clothes_category" FROM "Clothes" WHERE "clothes_category" = $1';

    if (param === 'hombre' || param === 'mujer') {
      //Query for getting by gender
      query =
        'SELECT "clothes_id", "clothes_name", "clothes_description", "clothes_material", "clothes_price", "clothes_gender", "clothes_image", "clothes_category" FROM "Clothes" WHERE "clothes_gender" = $1';
    }

    if (param === 'verano 24') {
      //Query for getting by collection
      query =
        'SELECT "clothes_id", "clothes_name", "clothes_description", "clothes_material", "clothes_price", "clothes_gender", "clothes_image", "clothes_category" FROM "Clothes" WHERE "clothes_collection" = $1';
    }

    if (sortQuery) {
      if (sortQuery === 'por-precio-mas-bajo') {
        query = query + ' ORDER BY "clothes_price" ASC';
      } else {
        query = query + ' ORDER BY "clothes_price" DESC';
      }
    }

    const data = (await client.query(query, [param])).rows;

    if (data.length === 0) {
      res.status(404).send('No data found.');
    } else {
      res.json(data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//GET CLOTHES BY ID
app.get('/v1/product/:product', authenticateApiKey, async (req, res) => {
  const name = req.params.product;

  const query =
    'SELECT "clothes_id", "clothes_name","clothes_image", "clothes_description", "clothes_material",  "clothes_price","clothes_gender", "clothes_category" FROM "Clothes" WHERE "clothes_name" = $1';

  try {
    const data = (await client.query(query, [name])).rows;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Serve static files from the 'backend' folder. images
app.use('/images', express.static('backend/images'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
