import { h } from 'preact';
import { useEffect, useContext, useState } from 'preact/hooks';
import styled from 'styled-components';
import ClientContext from '../../context/client';

const Leaderboard = () => {
	const tflClient = useContext(ClientContext);
	const [state, setState] = useState(null);

	useEffect(() => {
		tflClient.getLeaderboard().then(leaderboard => {
			setState(leaderboard);
		});
	}, []);

	return (
		<Wrapper className="container">
			<div className="row">
				<div className="col">
					<div className="d-flex">
						<div className="d-flex">
							<h1>Leaderboard</h1>
						</div>
						<MedalWrapper className="d-flex flex-row-reverse">
							<PlatinumMedal className="fas fa-medal" />
							<GoldMedal className="fas fa-medal" />
							<SilverMedal className="fas fa-medal" />
							<BronzeMedal className="fas fa-medal" />
							<IronMedal className="fas fa-medal" />
						</MedalWrapper>
					</div>
					<table className={'table table-sm table-striped table-hover'}>
						<thead>
							<tr>
								<th scope="col">Position</th>
								<th scope="col">{'Handle'}</th>
								<th scope="col">{'Score'}</th>
							</tr>
						</thead>
						<tbody>
							{state === null && 'Loading...'}

							{state?.players.map((player, index) => (
								<tr key={player.userId}>
									<th scope="row">{index + 1}</th>
									<td><a href="/users/{player.user_id}">{player.handle}#{player.numeric}</a></td>
									<td>{player.score}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div``;

const MedalWrapper = styled.div`
	width: 100%;
`;

const MedalIcon = styled.i`
	font-size: 3rem;
	padding: 0 0.4rem;
`;

const IronMedal = styled(MedalIcon)`
	color: #273746;
`;

const BronzeMedal = styled(MedalIcon)`
	color: #D35400;
`;

const SilverMedal = styled(MedalIcon)`
	color: silver;
`;

const GoldMedal = styled(MedalIcon)`
	color: gold;
`;

const PlatinumMedal = styled(MedalIcon)`
	color: #5DADE2;
`;

export default Leaderboard;
