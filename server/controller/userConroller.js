const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const UserController = {
  getAllUsers,
  createUser,
};

async function getAllUsers(req, res) {
  try {
    const users = await User.find().select("-password");
    res.status(200).json({
      status: {
        code: 200,
        message: "Success",
      },
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: {
        code: 500,
        message: error.message,
      },
    });
  }
}

async function createUser(req, res) {
  try {
    const { email, password, phone, major } = req.body;

    const subvalid = "@untirta.ac.id";
    if (!email.includes(subvalid)) {
      return res.status(400).json({
        status: {
          code: 400,
          message: "Email invalid",
        },
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        status: {
          code: 400,
          message: "Email already registered",
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
      phone,
      major,
    });

    const user = await newUser.save();

    res.status(200).json({
      status: {
        code: 200,
        message: "Success",
      },
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: {
        code: 500,
        message: error.message,
      },
    });
  }
}

module.exports = UserController;
