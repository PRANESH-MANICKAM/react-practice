import { useEffect, useState } from "react";
import Input from "./input";

import "./index.css";
import { loginForm } from "./service";

const LoginForm = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginForm(form);
    setMessage(result.message);
    if (result.success) {
      alert(`Welcome ${result.data.username}!`);
    }
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="form-container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <Input
          label="Username"
          type="text"
          placeholder="Enter username"
          required
          value={form.username}
          name="username"
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Password"
          required
          value={form.password}
          name="password"
          onChange={handleChange}
        />
        <p className="message">{message}</p>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
