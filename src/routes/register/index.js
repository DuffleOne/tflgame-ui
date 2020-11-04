import { h } from 'preact';
import styled from 'styled-components';

const submit = e => {
	console.log('hello');

	e.preventDefault();
};

const Register = () => (
	<Wrapper className="container">
		<div className="row justify-content-md-center">
			<div className="col col-lg-6">
				<div className="card shadow">
					<div className="card-body">
						<h5 className="card-title">Register</h5>
						<form id="registerForm" onSubmit={submit} className="mb-2">
							<div className="form-group">
								<label for="register-handle">Handle</label>
								<input required type="text" className="form-control" id="register-handle" aria-describedby="register-handle-help" />
								<small id="register-handle-help" className="form-text text-muted">Essentially your username.</small>
							</div>
							<div className="form-group">
								<label for="register-pin">PIN</label>
								<input required type="password" className="form-control" id="register-pin" />
							</div>
							<div className="row">
								<div className="col-sm-6">
									<button type="submit" className="btn btn-primary">Register</button>
								</div>
								<div className="col-sm-6 text-right">
									<a className="text-muted" href="/forgot-pin">Forgot pin</a>
								</div>
							</div>
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


export default Register;
