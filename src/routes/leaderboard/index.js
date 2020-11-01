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
		<Wrapper>
			<h1>Leaderboard</h1>
			<table className={'table'}>
				<thead>
					<tr>
						<th />
						<th>{'Handle'}</th>
						<th>{'Score'}</th>
					</tr>
				</thead>
				<tbody>
					{state === null && 'Loading...'}
					{state?.players.map((player, index) => (
						<tr key={player.userId}>
							<td>{index + 1}</td>
							<td><a href="/users/{player.user_id}">{player.handle}#{player.numeric}</a></td>
							<td>{player.score}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	padding: 56px 20px;
	min-height: 100%;
	width: 100%;
`;

export default Leaderboard;
