import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { sendEmail } from '../functions/signup_functions';
import { useNavigate } from 'react-router-dom';
const initialState = {};

const SignUpForm = () => {
	const [values, setValues] = useState(initialState);
	const navigate = useNavigate();
	const changeHandler = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};
	console.log(useNavigate());
	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await sendEmail(values);
		if (result.done) {
			navigate('/verify_code');
		}
	};
	return (
		<Container style={{ width: '40%', marginTop: '20%' }}>
			<h2>Sign Up</h2>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						name="email"
						onChange={changeHandler}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						onChange={changeHandler}
						placeholder="Password"
					/>
				</Form.Group>

				<Button className="mt-2" variant="dark" type="submit">
					Create account
				</Button>
			</Form>
		</Container>
	);
};

export default SignUpForm;
