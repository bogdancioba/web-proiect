const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200,
  };

const mongoose = require("mongoose");

const usersRoute = require("./routes/users");
const tradeRoute = require("./routes/trades");
const stocksRoute = require("./routes/stocks");

// async function listDatabases() {
//     try {
//       const connection = await mongoose.connect('mongodb://127.0.0.1:27017/trading', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       });
  
//       const collections = await connection.connection.db.listCollections().toArray();
  
//       console.log('Collections:', collections.map((collection) => collection.name));
  
//       connection.disconnect();
//     } catch (error) {
//       console.error('Error connecting to MongoDB:', error);
//     }
//   }
// listDatabases();

async function connectDatabase() {
    try {
      const dbName = 'trading';
      await mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log(`Connected to MongoDB database: ${dbName}`);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

connectDatabase();

const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));


app.use("/api/users", usersRoute);
app.use("/api/trades", tradeRoute);
app.use("/api/stocks", stocksRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





