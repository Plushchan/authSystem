import { useState } from "react";
import TextInput from "../components/TextInput";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();

    if (password != repeatPassword) return;

    const req = {
      email,
      password,
    };

    try {
      const res = await api.post("/register", req);
      const data = res.data;

      if (data.success) navigate("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <TextInput
          label={"E-mail"}
          value={email}
          handler={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label={"Password"}
          value={password}
          handler={(e) => setPassword(e.target.value)}
        />
        <TextInput
          label={"Repeat your password"}
          value={repeatPassword}
          handler={(e) => setRepeatPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Register;
