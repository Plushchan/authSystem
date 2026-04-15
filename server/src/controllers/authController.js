import "dotenv/config";
import bcrypt from "bcrypt";
import userCreate from "../utils/db/userCreate.js";
import jwtSign from "../utils/others/jwtSign.js";
import userFind from "../utils/db/userFind.js";

export async function register(req, res) {
  const { email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(
      password,
      Number(process.env.BCRYPT_SALTROUNDS),
    );

    const user = await userCreate(email, hashPassword);

    const token = jwtSign(user.id, email);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.status(201).json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    res.status(400).json({
      success: false,
      message: "An error occurred while creating the user.",
    });
  }
}

export async function login(req, res) {
  const { email, password } = req.body;

  try {
    const userFindResult = await userFind(email, password);

    if (!userFindResult.success) return res.status(404).json(userFindResult);

    const token = await jwtSign(
      userFindResult.user.id,
      userFindResult.user.email,
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24,
    });

    res.status(200).json({
      success: true,
    });
  } catch (err) {
    console.error(err);
  }
}

export function logout(req, res) {}
