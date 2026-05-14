import React from 'react'
import { useState } from 'react'



const App = () => {

const [formData,setFormData] = useState({
  name:"",
  email:"",
  password:""
});

const handleChange = (e)=>{
  setFormData({
    ...formData,[e.target.name]:e.target.value
  })
}

const [submit,setSubmit] = useState(false);

const handleSubmit = (e)=>{
  e.preventDefault();
  setSubmit(true);
  console.log(formData);
  
}

  return (
    <>
    
    <h1>Register form</h1>

    <div className="container">
      <form onSubmit={handleSubmit}>
        <label style={{color:'black'}}>Name: </label>
        <input type="text" placeholder='Enter your name'name='name' value={formData.name} onChange={handleChange} />
        <br /><br />
        
        <label style={{color:'black'}}>Email: </label>
        <input type="text" placeholder='Enter your email' name='email' value={formData.email} onChange={handleChange} />
        <br /><br />

        <label style={{color:'black'}}>Password: </label>
        <input type="text" placeholder='Enter your password'name='password' value={formData.password} onChange={handleChange} />
      <br /><br />

      <button type='submit'>Login</button>

      </form>
    </div>
        
    </>
  )
}

export default App




