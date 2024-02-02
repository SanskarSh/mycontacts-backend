const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "Please add user name"],
    },
    email: {
      type: String,
      require: [true, "Please add email address"],
      unique: [true, "Email already exists"],
    },
    password: {
      type: String,
      require: [true, "Please enter password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema); 