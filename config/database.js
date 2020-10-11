const dotenv = require("dotenv");
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri:
          "mongodb://frxncismor:H609kmxxDcB0@blog-shard-00-00.ffoyi.mongodb.net:27017,blog-shard-00-01.ffoyi.mongodb.net:27017,blog-shard-00-02.ffoyi.mongodb.net:27017/blog?ssl=true&replicaSet=atlas-zpco3a-shard-0&authSource=admin&retryWrites=true&w=majority",
        database: "blog",
      },
      options: {
        ssl: true,
      },
    },
  },
});
