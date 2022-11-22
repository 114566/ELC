/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';

import axios from 'axios';

/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */
    constructor(props) {
        super(props);
        this.state = {
            SearchedData: [],
            isSearched : false
        };
        this.filterData = this.filterData.bind(this);
    }

    filterData(filterValue) {
        let resutData = [];
        this.setState({isSearched : true});
        console.log(filterValue);
        axios.get('http://localhost:3035/filterData', { params: { data: filterValue } })
            .then((response) => {
                return this.setState({ SearchedData: response.data });
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="App">
                <Menu filterData={this.filterData} />
                <Home SearchedData={this.state.SearchedData} isSearched={this.state.isSearched} />
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
