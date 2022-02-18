import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { verifyCode } from '../functions/signup_functions';
import { useNavigate } from 'react-router-dom';
const VerifyCodePage = () => {
	const navigate = useNavigate();
	const [values, setValues] = useState({ code: '' });
	const [error, setError] = useState(false);
	const changeHandler = (e) => {
		setValues({
			code: e.target.value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		verifyCode(values)
			.then(() => {
				navigate('/welcome');
			})
			.catch(() => {
				setError(true);
			});
	};
	return (
		<Container style={{ width: '40%', marginTop: '20%' }}>
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>
						Enter the code you recieved in email
					</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter Code"
						name="code"
						onChange={changeHandler}
					/>
				</Form.Group>
				{error && (
					<div>
						<Form.Text className="text-danger">
							Invalid Code
						</Form.Text>
					</div>
				)}

				<Button className="mt-2" variant="success" type="submit">
					Verify
				</Button>
			</Form>
		</Container>
	);
};

export default VerifyCodePage;
