import React,{Component} from 'react';
import {CardList} from './CardAuto';
import Scroll from './scroll.js'




class App extends Component{
    constructor(){
    	super();
    	this.state = {
				      robots: [],
				      searchfield: ''
					 }
    			}

    onSearchChange = (event)=>{
    	this.setState({
    		searchfield: event.target.value
    	});
    }

    componentDidMount(){
    	fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    		return response.json();
    	}).then(users => this.setState({robots:users}))

    	console.log("componentDidMount"  + this.state.robots.length)
    		
    }

    
	render(){
		    const FilteredRobots = this.state.robots.filter(robot =>{
         return(
           robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
         	)
    	})
		    console.log(this.state.robots.length)
		    if(this.state.robots.length === 0)
			    {
			    	return <h1 className = 'mrrobot'>Loading</h1>
			    }
			else{
				return(
					  <div className = 'tc'>
					  <h1 className = 'f1 mrrobot'>Mr.Robots</h1>
					  <input 
					  className = 'pa3 ba b--green bg-lightest-blue' 
					  type = 'search' 
					  placeholder = 'Enter the name of the robot'
                      onChange = {this.onSearchChange}
					  />
					  <Scroll>
					  <CardList robots = {FilteredRobots} />
					  </Scroll>
					  </div>
					);
			}
		}
}

export default App;