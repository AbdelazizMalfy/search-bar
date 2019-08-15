import React, { Component } from 'react'


import SearchBar from './SearchBar';
import ItemsList from './ItemsList';
import items from './items';

class App extends Component {
    state = {
        filteredList: items
    }

    onSearchSubmit = (term) => {
        const filteredList = items.filter((item) => {
            return item.title.toLowerCase().indexOf(term) !== -1 ||
            item.description.indexOf(term.toLowerCase()) !== -1 ;
        })

        this.setState({filteredList})
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}} >
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ItemsList items={this.state.filteredList} />
            </div>
            
        )
    }
}


export default App;