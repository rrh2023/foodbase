import React from 'react'

const FoodFact = (props) => {
    return (
        <li>
            {props.nutrientName}: {props.value + `: ` + props.unitName}
        </li>
    )
}

export default FoodFact
