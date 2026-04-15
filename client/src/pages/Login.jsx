import React from "react";
import TextInput from "../components/TextInput";
import { useState } from "react";
import api from "../utils/api.js";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();

    const req = {
      email,
      password,
    };

    const res = await api.post("/login", req);
    const data = res.data;

    if (!data.success) return;

    navigate("/");

    console.log(data);
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

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
