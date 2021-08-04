import React from 'react'
import FoodFact from './FoodFact'

const FoodItem = ({foodData}) => {
    const nutrients = foodData.foods[0].foodNutrients

    const nutritionFacts = nutrients.filter(function(nutrient){
        return nutrient.nutrientName === "Protein" || nutrient.nutrientName ==="Total lipid (fat)" || nutrient.nutrientName ==="Carbohydrate, by difference" || nutrient.nutrientName ==="Energy"
    })
   
    return (
        <div className="card">
            <div className="card-body" style={{width: "30rem"}}>
            <h1 className="card-title">{foodData.foods[0].description}</h1>
            <h3 className="card-subtitle mb-2 text-muted">Nutrition Facts (per serving):</h3>
            <ul>

                {
                    nutritionFacts.map(fact => {
                        return (
                        <FoodFact 
                        key={fact.nutrientId} 
                        nutrientName={fact.nutrientName} 
                        unitName={fact.unitName}
                        value={fact.value}
                        />
                        )
                    })
                }

            </ul>
            </div>
        </div>
    )
}

export default FoodItem
