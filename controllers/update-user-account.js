import User from "../models/userModels.js";

User;

async function updateUserAccount(req, res) {
  const { userId } = req.params;
  const { fullName, email, password, age } = req.body;

  // check if userId is provided
  if (!userId) {
    res.status(400).json({ message: "Please the userId is required" });
  }

  // validate that the values needed to create the record were actually sent along with the request
  if (!fullName) {
    return res
      .status(400)
      .json({ message: "please provide fullname to update" });
  }
  if (!email) {
    return res.status(400).json({ message: "please provide email to update" });
  }
  if (!password) {
    return res
      .status(400)
      .json({ message: "please provide password to update" });
  }
  if (!age) {
    return res.status(400).json({ message: "please provide age to update" });
  }

  // check if a user with the id actually exist
  const isUserValid = await User.findOne({ _id: userId });

  if (isUserValid === null) {
    return res
      .status(400)
      .json({ classmessage: "Please provide a valid user id" });
  }

  try {
    const updatedUserInfo = await User.findOneAndUpdate(
      { _id: userId },
      {
        email: email,
        password: password,
        age: age,
        fullName: fullName,
      },
      { new: true }
    );

    console.log(updatedUserInfo);
    res
      .status(201)
      .json({ message: "Your account has been updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: " Internal server error" });
  }

  // res.status(200).send("successfully updated");
}

export default updateUserAccount;
