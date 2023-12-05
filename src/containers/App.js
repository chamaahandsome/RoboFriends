import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll'


class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: [],
            searchfield: '' 
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
    return !robots.length ?
        <div className="vh-100 flex justify-center items-center"> 
            <h1 classname = 'f1 tc'>Loading</h1>
        </div>:
            (
            <div className = 'tc'>
                <h1 className = 'f2'>We Dem Boyz</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
            </div>);
    }
}

export default App;