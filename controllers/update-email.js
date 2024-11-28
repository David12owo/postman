import User from "../models/userModels.js";

async function updateUserEmail(req, res) {
  const { email, newUserEmail } = req.body;

  // check if email was provided
  if (!email) {
    return res.status(400).json({ message: "Please provide user email" });
  }

  // check if email yo update was provided
  if (!newUserEmail) {
    return res
      .status(400)
      .json({ message: "Please provide the new email address " });
  }

  // check if an account with email exist
  const userExists = await User.findOne({ email: email });
  if (userExists === null) {
    return res
      .status(400)
      .json({ messsage: `No account found with email address ${email}` });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: email },
      { email: newUserEmail },
      { new: true }
    );
    console.log(updatedUser);

    res.status(201).send("Email updated succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default updateUserEmail;
