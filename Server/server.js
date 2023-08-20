const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./API'); // Import your API router
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mount the API router under the '/api' prefix
app.use('/api', apiRouter);

// Server Port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
