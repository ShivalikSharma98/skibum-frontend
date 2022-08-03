import React, { useState } from 'react';
import Header from '../../headers/header/Header';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
	const [username, setUsername] = useState('');
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		navigate(`/posts/${username}`, { replace: true });
	}

	function handleChange(event) {
		event.preventDefault();
		setUsername(event.target.value);
	}

	return (
		<>
			<Header />
			<div className='login'>
				<div className='login-form'>
					<form onSubmit={handleSubmit}>
						<h2 className='text-center'>Log in</h2>
						<div className='form-group'>
							<input
								id='username'
								type='text'
								className='form-control'
								placeholder='Username'
								onChange={handleChange}
								required='required'
							/>
						</div>
						<div className='form-group'>
							<input
								id='password'
								type='password'
								className='form-control'
								placeholder='Password'
								required='required'
							/>
						</div>
						<div className='form-group'>
							<button type='submit' className='btn btn-primary btn-block'>
								Log in
							</button>
						</div>
					</form>
					<p className='text-center'>
						<Link to='/posts/signup'>Create an Account</Link>
					</p>
				</div>
			</div>
		</>
	);
}

export default Login;
