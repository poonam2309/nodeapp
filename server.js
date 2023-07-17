const express = require('express');
const fs = require('fs');

const app = express();

// Accessing environment variables from the ConfigMap
const databaseUrl = process.env.DATABASE_URL;
const apiKey = process.env.API_KEY;

// Accessing secret values from the Secrets hkjhjk
const secretKey = process.env.SECRET_KEY;

// Using the volume to store and read data
const storagePath = '/app/storage/data.txt';

app.get('/', (req, res) => {
  // Perform operations using the environment variables, secrets, and volume
  const data = `Database URL: ${databaseUrl}\nAPI Key: ${apiKey}\nSecret Key: ${secretKey}\n`;

  fs.appendFile(storagePath, data, (err) => {
    if (err) {
      console.error('Error writing data:', err);
      return res.status(500).send('Internal Server Error');
    }

    console.log('Data written successfully!');
    res.send('Data written successfully!');
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

