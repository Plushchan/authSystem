import User from "../../database/models/User";

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