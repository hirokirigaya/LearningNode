import moongose from "mongoose";

moongose
  .connect("mongodb://localhost/aprendendo")
  .then(() => {
    console.log("Connected in database");
  })
  .catch((err) => {
    console.log("Error to establish connect with database:" + err);
  });

const UserSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
  },
});

const User = moongose.model("users", UserSchema);
const newUser = moongose.model("users");

export { User };

new newUser({
  name: "João",
  lastname: "Silva",
  email: "joaosilva@email.com",
  age: 20,
  country: "Brasil",
}).save().then(() => {
  console.log("User created successfully");
}).catch((err) => {
  console.log("Error to save user:" + err);
})
