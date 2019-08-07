import React from 'react';

const Followers = props => {
	console.log('Followers comp', props);
	return (
		<div>
			<img src={props.friend.avatar_url} alt='friends' />
			<h4>{props.friend.login}</h4>
		</div>
	);
};

export default Followers;
