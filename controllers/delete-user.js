import User from "../models/userModels.js";

async function DeleteUser(req, res) {
  const { useremail } = req.query;

  // check if useremail was provided
  if (!useremail) {
    return res.status(400).json({ message: "Please provide user email" });
  }

  // check if user email exist
  const userAccount = await User.findOne({ email: useremail });
  if (userAccount === null) {
    return res
      .status(400)
      .json({ message: "No user account found with the provided email" });
  }

  try {
    await User.deleteOne({ email: useremail });
    res.status(200).json({ message: "Account deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default DeleteUser;
