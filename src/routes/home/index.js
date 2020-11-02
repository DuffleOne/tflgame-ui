import { h } from 'preact';
import styled from 'styled-components';

const Home = () => (
	<div>
		<div className="jumbotron jumbotron-fluid">
			<div className="container">
				<h1 className="display-4">TFL Game!</h1>
				<p className="lead">The game of vowels, anagrams, and most importantly, transport station name guessing!</p>
				<hr className="my-4" />
				<a className="btn btn-primary btn-lg" href="/game" role="button">Start a game</a>
			</div>
		</div>

		<div className="container">
			<div className="row">
				<div className="col-lg-4">
					<Card className="card">
						<div className="card-body">
							<h5 className="card-title">See your games</h5>
							<p className="card-text">Look through your game history, and manage your account.</p>
							<a href="/account" className="btn btn-primary">Account</a>
						</div>
					</Card>
					<Card className="card">
						<div className="card-body">
							<h5 className="card-title">Make an account</h5>
							<p className="card-text">Create your user handle to appear on the leaderboard.</p>
							<a href="/account" className="btn btn-primary">Account</a>
						</div>
					</Card>
				</div>
				<div className="col-lg-4">
					<Card className="card">
						<div className="card-body">
							<h5 className="card-title">Leaderboard</h5>
							<p className="card-text">Each game affects your global user score, beat many games to reach the top.</p>
							<a href="/leaderboard" className="btn btn-primary">Leaderboard</a>
						</div>
					</Card>
				</div>
				<div className="col-lg-4">
					<Card className="card">
						<div className="card-body">
							<h5 className="card-title">Game options</h5>
							<p className="card-text">If you think it's called TFL game because it only handles London, you'd be mistaken.</p>
							<a href="/game_options" className="btn btn-primary">Test game options</a>
						</div>
					</Card>
				</div>
			</div>
		</div>
	</div>
);

const Card = styled.div`
	margin-bottom: 1rem;
`;

export default Home;
