import { h } from 'preact';
import { Router } from 'preact-router';
import ClientContext from '../context/client';
import Header from './header';
import crpc from 'crpc';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Leaderboard from '../routes/leaderboard';
import Account from '../routes/account';
import Profile from '../routes/profile';


class Client {
	constructor(baseUrl) {
		this._client = crpc(baseUrl);
	}

	async getLeaderboard() {
		return await this._client('get_leaderboard');
	}

	async createUser(handle, pin) {
		return await this._client('create_user', {
			handle,
			pin,
		});
	}
}

const App = () => (
	<ClientContext.Provider value={new Client('https://api.tflga.me')}>
		<div id="app">
			<Header />
			<Router>
				<Home path="/" />
				<Account path="/account" />
				<Leaderboard path="/leaderboard" />
				<Profile path="/profile/" user="me" />
				<Profile path="/profile/:user" />
			</Router>
		</div>
	</ClientContext.Provider>
);

export default App;
