import React from 'react'
import {connect} from 'react-redux'
import {selectCar} from '../actions'


import '../styles/carlist.css'

const CarList = props =>{
    const carList = props.cars.map(
        car=>{
        return(
            <div className="item" key={car.id} onClick={()=>{props.selectCar(car)}}>
                <img className="ui avatar image"  src={car.img} alt={car.name}/>
                  <div className="content">
                    <p className="header">{car.name}</p>
                  </div>
            </div>
          )
        }
    )
    return(
        <div className="carlist ui middle aligned selection list">
            {carList}
        </div>
    )
}
const mapStateToProps = state => {
   return  {cars: state.cars}
}
export default connect(mapStateToProps,{selectCar})(CarList)

/*
910319340656
*/