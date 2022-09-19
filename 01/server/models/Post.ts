import db from "./db";
import { STRING, TEXT } from "sequelize";

const Post = db.sequelize.define("postagens", {
  title: {
    type: STRING,
  },
  content: {
    type: TEXT,
  },
});

Post.sync({ force: true });
