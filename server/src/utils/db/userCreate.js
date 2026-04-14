import User from "../../database/models/User.js";

export default async function (email, password) {
  try {
    const UserCreated = await User.create({
      email,
      password,
    });

    return UserCreated;
  } catch (err) {
    console.error(err);

    return undefined;
  }
}