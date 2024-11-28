import User from "../models/userModels.js";

async function registerUser(req, res) {
  const { fullName, email, password, age } = req.body;
  // validate that the values needed to create the record were actually sent along with request
  if (!fullName) {
    return res.status(400).json({ message: "please provide your fullname" });
  }
  if (!email) {
    return res.status(400).json({ message: "please provide a valid email" });
  }
  if (!password) {
    return res.status(400).json({ message: "please provide your password" });
  }
  if (!age) {
    return res.status(400).json({ message: "please provide your age" });
  }

  // userAlreadyExist will be NUll if no user is found with that email address
  const userAlreadyExist = await User.findOne({ email: email });

  if (userAlreadyExist != null) {
    return res
      .status(400)
      .json({ message: `An account with $(email} already exist` });
  }
  // if all the values are provided, then we must create the record on our data base
  try {
    //
    // create the user record
    const userCreated = await User.create({
      fullName: fullName,
      email: email,
      password: password,
      age: age,
    });
    console.log(userCreated);

    res.status(201).json({ message: "successfully registered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occurred", errorStatus: 500 });
  }
}

export default registerUser;
