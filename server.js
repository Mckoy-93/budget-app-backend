//start my server. Use envars to start my server and other services
require("dotenv").config();

const app = require("./app");

const port = process.env. PORT;

app.listen(port, () => {console.log(`server listening on port ${port}`)
});