import React from 'react';
import Card from './Card.js'


export const CardList = ({robots})=>
{
	return(
	<div  className = 'container c'>
	{
	robots.map((user,i)=>{
			return(
			<Card 
			key = {i}
			id ={robots[i].id} 
			name = {robots[i].name} 
			username = {robots[i].username} 
			email = {robots[i].email}
			/>
			);
		})
	}
	</div>
	);
			  }

