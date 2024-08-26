import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Loginvalidation'
import axios from 'axios'

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(Validation(values))
    if (errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/Login', values)
        .then(res => {
          if (res.data === "Success") {
            navigate('/home');
          } else {
            alert("No record existed");
          }
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom, #d3d3d3, #000)', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='bg-white p-3 rounded w-25'>
        <h3 className='d-flex justify-content-center align-text-center'>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
          <Link to="/Register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</Link>
          <p>*Are you sure you already have an account?</p>
        </form>
      </div>
    </div>
  )
}

export default Login
