const express = require('express');
const fs = require('fs');

const app = express();

// Accessing environment variables from the ConfigMap
const databaseUrl = process.env.DATABASE_URL;

// Accessing secret values from the Secrets
const db_user = process.env.DB_USER;

const db_password = process.env.DB_PASSWORD;

// Using the volume to store and read data
const storagePath = '/app/storage/data.txt';


app.get('/', (req, res) => {
  // Perform operations using the environment variables, secrets, and volume
  const data = `Database URL: ${databaseUrl}\nUser Credentials: ${db_user}\nDB Password : ${db_password}\n`;

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

