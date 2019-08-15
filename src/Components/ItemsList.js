import React from 'react'

function ItemsList(props) {
    const items = props.items.map(item =>{
        return <div key={item.title} className="item" ><h3>{item.title}</h3><p>{item.description}</p></div>
    })


    return (
        <div className="ui relaxed divided list" >
            {items}
        </div>
    )
}
export default ItemsList;