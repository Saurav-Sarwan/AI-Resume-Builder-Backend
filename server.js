require("dotenv").config() //through this method we can call all variables present under .env file

const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
