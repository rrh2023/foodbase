import React from 'react'
import Spinner from './Spinner'
import FoodItem from './FoodItem'


const FoodData = (props) => {
    if(props.loading===true) {

        return <Spinner/>
    } else if(props.foodData.foods.length>=1 && props.loading===false){
        console.log(props.foodData)

        return (

            <FoodItem foodData={props.foodData}/>

    )} else{

        return <div>No results were found for your search</div>
    }
}

export default FoodData
