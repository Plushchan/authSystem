import "dotenv/config";
import jwt from "jsonwebtoken";

export default function (userId, userEmail) {
  try {
    const token = jwt.sign(
      { id: userId, email: userEmail },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    return token;
  } catch (err) {
    console.error(err);

    return undefined;
  }
}
