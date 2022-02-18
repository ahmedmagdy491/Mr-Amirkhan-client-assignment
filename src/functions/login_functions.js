import axios from 'axios';
export const login_fu = (data) => {
	return new Promise(async (resolve, reject) => {
		await axios
			.post('/user/login', data)
			.then((res) => {
				if (res.status === 200) {
					resolve({ done: true });
					localStorage.setItem(
						'token',
						JSON.stringify(res.data.result.auth_token)
					);
				}
			})
			.catch((err) => {
				reject({
					error: err.response.data.error,
				});
			});
	});
};
