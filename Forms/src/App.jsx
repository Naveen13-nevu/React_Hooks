import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ width: "350px", margin: "50px auto" }}>
      <h2>Register Form</h2>

      {submitted ? (
        <div style={{ color: "green" }}>
          <h3>✅ Submitted Successfully!</h3>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label><br />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              style={{ width: "100%", padding: "8px" }}
              required
            />
          </div>

          <button type="submit"
            style={{ width: "100%", padding: "10px", background: "blue", color: "white" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default Form;