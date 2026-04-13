import { useState } from "react";
import TextInput from "../components/TextInput";

function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  function submitHandler(e) {
    e.preventDefault();
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
      </form>
    </div>
  );
}

export default Register;
