import React, {Fragment, useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Form from './components/Form';
import FoodData from './components/FoodData'
import axios from 'axios';
import About from './components/About'

function App(props) {
  const APIKEY = `FfWD4RJWsJjRErfpCeZi4D6LnHp6ujVM84al2AGd`;

//state
const [food, setFood] = useState('')
const [loading, setLoading] = useState(false)
const [foodData, setFoodData] = useState({})
const [showData, setShowData] = useState(false)
const [showHoverData, setShowHoverData] = useState(true)
const [showHoverAbout, setShowHoverAbout] = useState(true)
const [showAlert, setShowAlert] = useState(false)

useEffect(() => {
  setShowData(false)
}, [])

//functions
const searchFood = (e) => {
  if(food===''){
    e.preventDefault();
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 1000)
  }else{
    e.preventDefault()
    setShowData(true)
    searchingForFood(food)
    setFood('')
  } 
}

const searchingForFood = async text => {
  setLoading(true)

  const res = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${text}&pageSize=2&api_key=${APIKEY}`);
    
  setFoodData(res.data)

  setTimeout(() => {
    setLoading(false)
  }, 1580)
  
}

const changeFood = (e) => {
  setFood(e.target.value)
}

  return (
    <Router>
    <div className="App">
     <Navbar setShowHoverData={setShowHoverData} showHoverData={showHoverData} setShowHoverAbout={setShowHoverAbout} showHoverAbout={showHoverAbout}/>
     <Switch>

       <Route exact path='/' render={props => (
         <Fragment>
            {showAlert===true && <div className="alert alert-danger" role="alert">Please enter an input</div>}
          <div className="center">
            {loading===false && <Form changeFood={changeFood} searchFood={searchFood} food={food} setShowData={setShowData}/>}
          </div>
      <div className="center">
        {!showData && <div> Food data will be shown here...</div>}
        {showData && <FoodData loading={loading} foodData={foodData}/>}
      </div>
         </Fragment>
       )}/>

      <Route exact path='/about' render={props => (
         <About/>
       )}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
