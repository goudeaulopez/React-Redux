import React from 'react'
import {connect} from 'react-redux'

import '../styles/cardetails.css'

const CarDetails = props => {
    return(
        <div className="cardetails">
            <img  src={props.car.img} alt={props.car.name}/>
        </div>
    )
}
const mapStateToProps = state => {
    return  {car: state.selectedCar}
 }
export default connect(mapStateToProps)(CarDetails)