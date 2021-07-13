import React from 'react';
import { robots } from "./robots";
import CardList from "./CardList";
import SearchBox from './SearchBox';
import "./App.css";

class App extends React.Component  {
    constructor(){
        super();
        this.state = {
            robots: robots,
            searchField: ""
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField:event.target.value});
        
    }
    render() {
        const filteredRobot = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        console.log(filteredRobot);
        return (
            <div className="bg pt-3">
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={filteredRobot}/>
            </div>
            
        );
    }
    
}


export default App;