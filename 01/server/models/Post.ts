import db from "./db";
import { STRING, TEXT } from "sequelize";

const Post = db.sequelize.define("posts", {
  title: {
    type: STRING,
  },
  content: {
    type: TEXT,
  },
});

export default Post;