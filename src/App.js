import { useEffect } from 'react';
import './App.css';
import Header from './components/header';
import RoutesTree from './RoutesTree';

function App() {
	const token = localStorage.getItem('token');
	return (
		<div className="App">
			<Header token={token} />
			<RoutesTree />
		</div>
	);
}

export default App;
