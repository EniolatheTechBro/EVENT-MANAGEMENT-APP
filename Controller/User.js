const Users = require("../Model/UserSchema");

const dotenv = require("dotenv");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

dotenv.config();

const JWT_SEC = process.env.JWT_SEC;

const createtoken = (id, email) => {
  return jwt.sign({ id, email }, JWT_SEC, { expiresIn: "3d" });
};

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await Users.findOne({ email });

    if (user) {
      res.status(404).json("This User Already Exists, Kindly Log in");
      return;
    }

    const salt = await bcrypt.genSalt();

    const newPassword = await bcrypt.hash(password, salt);

    await Users.create({ name, email, password:newPassword });

    res
      .status(200)
      .json({
        message: "account created successfully!,please proceed to Login",
        status: true,
      });
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log(email);
    const user = await Users.findOne({ email });
    // console.log(user);
    if (!user) {
      res
        .status(404)
        .json({
          message: "This User does not Exist, Kindly create an account",
        });
      return;
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      res
        .status(500)
        .json({ message: "Your Email address or password is incorrect!" });
      return;
    }

    const token = createtoken(user._id, user.email);

    const userNoPassWord = await Users.findOne({ email }).select("-password");

    res.status(200).json({ userNoPassWord, token });
    // console.log(userNoPassWord, token);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};



const getSingleUser =async (req,res)=>{
  const userId = req.params.id

  try {
    const user =await Users.findById(userId).select('-password')
    if(!user){
      res.status(404).json({message:'User not found!'})
      return
    }

    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
    console.log(error);
  }
}




module.exports = {
  createUser,
  loginUser,
  getSingleUser
};