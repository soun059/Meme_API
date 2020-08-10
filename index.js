const express = require("express");
const cors = require("cors");
const routes = require("./api/routes/routes");
const constants = require("./api/utils/constants");

const app = express();
const port = constants.port;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`meme api is listening to you from ${port}`);
});
