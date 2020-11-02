import { h } from 'preact';
import styled from 'styled-components';

const registerSubmit = e => {
	console.log('hello');

	e.preventDefault();
};

const Account = () => (
	<Wrapper className="container">
		<div className="row">
			<div className="col">
				<h1>Account</h1>
			</div>
		</div>
		<div className="row">
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Register</h5>
						<form id="registerForm" onSubmit={registerSubmit}>
							<div className="form-group">
								<label for="register-handle">Handle</label>
								<input required type="text" className="form-control" id="register-handle" aria-describedby="register-handle-help" />
								<small id="register-handle-help" className="form-text text-muted">Essentially your username.</small>
							</div>
							<div className="form-group">
								<label for="register-pin">PIN</label>
								<input required type="password" className="form-control" id="register-pin" />
							</div>
							<button type="submit" className="btn btn-primary">Register</button>
						</form>
					</div>
				</div>
			</div>
			<div className="col-lg-6">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Sign in</h5>
						<form id="loginForm">
							<div className="form-group">
								<label for="login-handle">Handle</label>
								<input required type="text" className="form-control" id="login-handle" aria-describedby="login-handle-help" />
								<small id="login-handle-help" className="form-text text-muted">Essentially your username.</small>
							</div>
							<div className="form-group">
								<label for="login-numeric">Numeric</label>
								<input type="text" className="form-control" id="login-numeric" aria-describedby="login-numeric-help" />
								<small id="login-numeric-help" className="form-text text-muted">We'll assume <code>001</code> unless otherwise provided.</small>
							</div>
							<div className="form-group">
								<label for="login-pin">PIN</label>
								<input required type="password" className="form-control" id="login-pin" />
							</div>
							<button type="submit" className="btn btn-primary">Login</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</Wrapper>
);

const Wrapper = styled.div`
	margin-top: 1rem;
`;

export default Account;
