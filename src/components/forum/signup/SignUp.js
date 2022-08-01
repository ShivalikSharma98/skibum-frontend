import React from 'react';
import Header from '../../headers/header/Header';

function SignUp() {
	return (
		<>
			<Header />
			<div className='login'>
				<div className='login-form'>
					<form>
						<h2 className='text-center'>Sign up</h2>
						<div className='form-group'>
							<input
								id='name'
								type='text'
								className='form-control'
								placeholder='Name'
								required='required'
							/>
						</div>
						<div className='form-group'>
							<input
								id='email'
								type='text'
								className='form-control'
								placeholder='Email'
								required='required'
							/>
						</div>
						<div className='form-group'>
							<input
								id='username'
								type='text'
								className='form-control'
								placeholder='Username'
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
								Sign up
							</button>
						</div>
					</form>
					<p className='text-center'>
						Do not use passwords associated with other accounts, passwords are currently not encrypted.
					</p>
				</div>
			</div>
		</>
	);
}

export default SignUp;
