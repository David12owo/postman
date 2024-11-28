import express from "express";

const router = express.Router();

import registerUser from "../controllers/register-user.js";
import UpdatedUserAccount from "../controllers/update-user-account.js";
import UpdateEmail from "../controllers/update-email.js";
import DeleteUser from "../controllers/delete-user.js";

router.post("/register-user", registerUser);

router.put("/update-user-account/:userId", UpdatedUserAccount);

router.patch("/update-email", UpdateEmail);

router.delete("/delete-user-account", DeleteUser);

export default router;
