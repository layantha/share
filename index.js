const sql = require('mssql');

// Configurations for your SQL Server with domain name
const config = {
  user: 'YourUsername',
  password: 'YourPassword',
  server: 'YourDomain\\YourServerName', // Include the domain name with the server name
  database: 'YourDatabaseName',
  options: {
    encrypt: true, // If you're connecting to Azure, set this to true
    trustServerCertificate: true // If you're using self-signed certificate, set this to true
  }
};

// Create a new instance of sql.ConnectionPool
const pool = new sql.ConnectionPool(config);

// Connect to the database
pool.connect().then(() => {
  // Insert query
  const insertQuery = `INSERT INTO YourTableName (columnName) VALUES (@value)`;

  // Value to be inserted
  const valueToInsert = 'YourValue';

  // Create a new SQL request
  const request = new sql.Request(pool);

  // Add parameters and execute the query
  request.input('value', sql.VarChar, valueToInsert)
         .query(insertQuery)
         .then(result => {
            console.log('Value inserted successfully.');
            pool.close(); // Close the pool after use
         })
         .catch(err => {
            console.error('Error inserting value:', err);
            pool.close(); // Close the pool in case of an error
         });
})
.catch(err => {
  console.error('Database connection failed:', err);
});
