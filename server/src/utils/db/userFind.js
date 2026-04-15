import User from "../../database/models/User.js";
import bcrypt from "bcrypt";

export default async function (email, password) {
  const user = await User.findOne({
    where: { email },
  });

  if (!user)
    return {
      success: false,
      message: "User not found.",
    };

  const passwordVerify = await bcrypt.compare(password, user.password);

  if (!passwordVerify)
    return {
      success: false,
      message: "Incorrect password.",
    };

  return {
    success: true,
    user,
  };
}
