import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Registervalidation'
import axios from 'axios'

function Register() {
  const [values, setValues] = useState({
    name: '',
    dob: '',
    sex: '',
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
    if (errors.name === "" && errors.dob === "" && errors.sex === "" && errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/Register', values)
        .then(res => {
          navigate('/');
        })
        .catch(err => console.log(err));
    }
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom, #d3d3d3, #000)', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='bg-white p-3 rounded w-25'>
        <h3 className='d-flex justify-content-center align-text-center'>Register</h3>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              onChange={handleInput}
              name='name'
              className='form-control rounded-0'
            />
            {errors.name && <span className='text-danger'>{errors.name}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='dob'>Birthday</label>
            <input
              type='date'
              placeholder='Enter Birthday'
              onChange={handleInput}
              name='dob'
              className='form-control rounded-0'
            />
            {errors.dob && <span className='text-danger'>{errors.dob}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='sex'>Sex</label>
            <input
              type='text'
              placeholder='Enter Sex'
              onChange={handleInput}
              name='sex'
              className='form-control rounded-0'
            />
            {errors.sex && <span className='text-danger'>{errors.sex}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              onChange={handleInput}
              name='email'
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={handleInput}
              name='password'
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
          <Link to='/' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Register
