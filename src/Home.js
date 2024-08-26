import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import './Home.css'; 

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); 

  useEffect(() => {
    axios.get('http://localhost:8081/data')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Extract date part only
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev); // Toggle the visibility state
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="home-container">
      <h1 className="home-header">PERSONAL</h1>
      <table className="home-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>DOB</th>
            <th>Sex</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            <tr key={data[0].id}>
              <td>{data[0].name}</td>
              <td>{formatDate(data[0].dob)}</td>
              <td>{data[0].sex}</td>
              <td>{data[0].email}</td>
              <td className="password-cell">
                {showPassword ? data[0].password : '*'.repeat(data[0].password.length)}
                <button onClick={togglePasswordVisibility} className="toggle-password-btn">
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </td>
            </tr>
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
