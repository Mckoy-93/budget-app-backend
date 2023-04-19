//start my server. Use envars to start my server and other services
require("dotenv").config();

const app = require("./app");

const PORT = process.env.PORT;

app.listen(PORT, () => {console.log(`server listening on port ${PORT} 💰`)
});