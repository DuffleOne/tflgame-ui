import { h } from 'preact';
import { Router } from 'preact-router';
import ClientContext from '../context/client';
import Header from './header';
import crpc from 'crpc';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Leaderboard from '../routes/leaderboard';
import Profile from '../routes/profile';


class Client {
	constructor(baseUrl) {
		this._client = crpc(baseUrl);
	}

	async getLeaderboard() {
		return await this._client('get_leaderboard');
	}
}

const App = () => (
	<ClientContext.Provider value={new Client('http://localhost:3000')}>
		<div id="app">
			<Header />
			<Router>
				<Home path="/" />
				<Leaderboard path="/leaderboard" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</div>
	</ClientContext.Provider>
);

export default App;
