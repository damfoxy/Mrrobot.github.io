import React from 'react'

const Card = (params) =>
{
	return(
		<div className = 'dib br2 ma3 pa3 grow c'>
		<img alt = 'robo' src = {`https://robohash.org/${params.id}?200x200`}/>
		<div>
		<h2 class = 'name'>{params.name} </h2>
		<p class = 'email'> {params.email}</p>
		</div>
		</div>
		);

}

export default Card;