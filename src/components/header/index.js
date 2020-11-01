import { h } from 'preact';
import { Link } from 'preact-router/match';

const Header = () => (
	<div>
		<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
			<Link className="navbar-brand" href="/">TFLGame</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
					<li className="nav-item"><Link className="nav-link" href="/game">Game</Link></li>
					<li className="nav-item"><Link className="nav-link" href="/account">Account</Link></li>
					<li className="nav-item"><Link className="nav-link" href="/leaderboard">Leaderboard</Link></li>
				</ul>
			</div>
		</nav>
		<div class="alert alert-warning" role="alert">
			This site is under heavy construction. <a href="https://github.com/Duffleman/tflgame-go" class="alert-link">Follow along on GitHub</a>.
		</div>
	</div>
);

export default Header;
