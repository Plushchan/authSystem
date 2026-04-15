import "dotenv/config";
import jwt from "jsonwebtoken";

export default async function loginVerify(req, res, next) {
  const token = req.cookie.token;

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired session.",
    });
  }
}
