import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import {
	sendEmail,
	sendEmailToResetPassword,
} from '../functions/signup_functions';

const ForgotPasswordPage = () => {
	const [values, setValues] = useState({});
	const [message, setMessage] = useState('');
	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		sendEmailToResetPassword({
			...values,
			link: window.location.origin + '/update_password',
		})
			.then((res) => {
				console.log(res);
				setMessage('we sent an email to your inbox');
			})
			.catch((err) => {
				setMessage(err);
			});
	};
	return (
		<Container style={{ width: '40%', marginTop: '20%' }}>
			<h2>Reset Password</h2>
			<Form onSubmit={handleSubmit}>
				{message && (
					<div>
						<Form.Text className="text-danger">{message}</Form.Text>
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

				<Button className="mt-2" variant="success" type="submit">
					Check Email
				</Button>
			</Form>
		</Container>
	);
};

export default ForgotPasswordPage;
