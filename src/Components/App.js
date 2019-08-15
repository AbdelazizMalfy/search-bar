import React, { Component } from 'react'
import SearchBar from './SearchBar';
import items from './items';

class App extends Component {

    onSearchSubmit = (term) => {
        console.log(term);
    }





    render() {
        let renderedContent = items.map( item => (<div>{item.title}{item.description}</div> ) )

        return (
            <div className="ui container" style={{marginTop: '10px'}} >
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                {renderedContent()}
            </div>
            
        )
    }
}


export default App;