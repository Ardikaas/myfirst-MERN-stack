const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    password: {
      type: String,
      required: [true],
    },
    email: {
      type: String,
      required: [true],
    },
    phone: {
      type: Number,
      required: [true],
    },
    major: {
      type: String,
      required: [true],
      enum: [
        "Informatika",
        "Sipil",
        "Industri",
        "Kimia",
        "Elektro",
        "Mesin",
        "Statistika",
        "Metalurgi",
      ],
    },
    role: {
      type: String,
      required: [true],
      default: "User",
    },
    isVoted: {
      type: Boolean,
      required: [true],
      default: false,
    },
  },
  {
    timestamps: [true],
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
