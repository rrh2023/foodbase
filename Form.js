import React from 'react'

function Form(props) {

    return (
        <form >
           <input type="text" onChange={props.changeFood} placeholder="Search for food..."/>
           <button onClick={props.searchFood} type="submit" value="Search" className="btn btn-dark btn-block">Search</button>
        </form>
    
    )
}

export default Form
