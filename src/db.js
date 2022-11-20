const mongoose = require("mongoose");
const mongoConfig = require("./config").Mongo;

mongoose.connect(`mongodb://${mongoConfig.path}:${mongoConfig.port}/${mongoConfig.dbName}`, { useNewUrlParser: true, useUnifiedTopology: true }).catch((error) => console.log(error));
