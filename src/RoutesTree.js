import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home_page';
import LoginPage from './pages/login_page';
import SignUpPage from './pages/signup_page';
import VerifyCodePage from './pages/verify_code_page';
import WelcomePage from './pages/welcome_pag';
import { useNavigate } from 'react-router';
import ForgotPasswordPage from './pages/forgot_password';
const RoutesTree = () => {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />

			<Route exact path="/login" element={<LoginPage />} />

			<Route exact path="/signup" element={<SignUpPage />} />

			<Route exact path="/verify_code" element={<VerifyCodePage />} />

			<Route exact path="/welcome" element={<WelcomePage />} />

			<Route
				exact
				path="/forgot_password"
				element={<ForgotPasswordPage />}
			/>
		</Routes>
	);
};

export default RoutesTree;
