import React from 'react';

const User = props => {
	return (
		<div>
      <h1>User</h1>
			<img src={props.user.avatar_url} alt='pat' />
			<h3>{props.user.login}</h3>
		</div>
	);
};

export default User;
