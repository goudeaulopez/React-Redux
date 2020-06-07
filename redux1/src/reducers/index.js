import {combineReducers} from 'redux'
import array from '../components/arrayList'

const defItem = {name:'leo',
                  age: 1200,
                   img:'https://media.giphy.com/media/14qgEfMsjXb2VO/giphy-downsized-large.gif'}

const carList = () =>{
    return array()
}

const carSelected = (selectedCar= defItem, action)=>{
    if(action.type==='CAR_SELECTED'){
        return action.payload
    }
    return selectedCar
}
export default combineReducers({
    cars: carList,
    selectedCar: carSelected
  });

  
