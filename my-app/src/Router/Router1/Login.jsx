import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'admin@gmail.com' && password === 'letmein') {
      setIsLoggedIn(true);
    }
  }

  if (isLoggedIn) {
    navigate('/home')
  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login