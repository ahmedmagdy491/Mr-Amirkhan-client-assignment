import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { login_fu } from '../functions/login_functions';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
	const [values, setValues] = useState({});
	const [error, setError] = useState(false);
	const navigate = useNavigate();
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	console.log(error);
	const handleSubmit = (e) => {
		e.preventDefault();
		login_fu(values)
			.then(() => {
				navigate('/welcome');
			})
			.catch(() => {
				setError(true);
			});
	};
	return (
		<Container style={{ width: '40%', marginTop: '20%' }}>
			<h2>Login</h2>
			<Form onSubmit={handleSubmit}>
				{error && (
					<div>
						<Form.Text className="text-danger">
							Invalid Credentials
						</Form.Text>
					</div>
				)}
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						name="email"
						onChange={handleChange}
						placeholder="Enter email"
					/>
				</Form.Group>

				<Form.Group className="mb-2" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						onChange={handleChange}
						placeholder="Password"
					/>
				</Form.Group>
				<div>
					<Link to="/forgot_password">Forgot password?</Link>
				</div>
				<Button className="mt-2" variant="dark" type="submit">
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default LoginForm;
