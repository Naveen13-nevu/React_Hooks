import { useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  }); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            id="name"
            placeholder="Enter your name"
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            id="email"
            placeholder="Enter your email"
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            id="password"
            placeholder="Enter the password"
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit">
          Submit
        </button>

      </form>
    </>
  );
}

export default App;