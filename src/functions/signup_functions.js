import axios from 'axios';
export const sendEmail = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post('/user/sendEmail', data);
			if (result.statusText !== 'OK') {
				reject(result);
			}
			resolve(result);
		} catch (error) {
			reject(error.response.data.message);
		}
	});
};

export const sendEmailToResetPassword = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(
				'/user/sendEmailToResetPassword',
				data
			);
			if (result.statusText !== 'OK') {
				reject(result);
			}
			resolve({ done: true });
		} catch (error) {
			console.log(error.response);
			reject(error.response.data);
		}
	});
};

export const verifyCode = (data) => {
	return new Promise(async (resolve, reject) => {
		await axios
			.post('/user/register', data)
			.then((res) => {
				if (res.statusText === 'Created') {
					console.log(res.data.result);
					resolve({ done: true });
					localStorage.setItem(
						'token',
						JSON.stringify(res.data.result.auth_token)
					);
				}
			})
			.catch(() => {
				reject({ done: false });
			});
	});
};
