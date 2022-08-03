import React, { useState } from 'react';
import Header from '../../headers/header/Header';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { config } from '../../../Constants';

function SignUp() {
	const initialFormState = { name: '', email: '', username: '', password: '' };
	const [formState, setFormState] = useState(initialFormState);
	let navigate = useNavigate();

	function handleChange(event) {
		event.preventDefault();
		setFormState({ ...formState, [event.target.id]: event.target.value });
	}

	function handleSubmit(event) {
		event.preventDefault();
		const url = `${config.API_URL}/api/user`;
		axios
			.post(url, formState)
			.then(() => {
				navigate(`/posts/${formState.username}`, { replace: true });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<>
			<Header />
			<div className='login'>
				<div className='login-form'>
					<form onSubmit={handleSubmit}>
						<h2 className='text-center'>Sign up</h2>
						<div className='form-group'>
							<input
								id='name'
								type='text'
								className='form-control'
								placeholder='Name'
								onChange={handleChange}
								required='required'
							/>
						</div>
						<div className='form-group'>
							<input
								id='email'
								type='text'
								className='form-control'
								placeholder='Email'
								onChange={handleChange}
								required='required'
							/>
						</div>
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
								onChange={handleChange}
								required='required'
							/>
						</div>
						<div className='form-group'>
							<button type='submit' className='btn btn-primary btn-block'>
								Sign up
							</button>
						</div>
					</form>
					<p className='text-center'>
						Do not use credentials associated with other accounts. Information
						is currently not encrypted.
					</p>
				</div>
			</div>
		</>
	);
}

export default SignUp;
