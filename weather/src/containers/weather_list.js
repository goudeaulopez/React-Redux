import React from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'


class WeatherList extends React.Component{
    renderWeather(citydata){
    const city = citydata.city.name;
    const temps = _.map(citydata.list.map(weather=> weather.main.temp), temp=>temp-273)
    const pressure = citydata.list.map(weather=> weather.main.pressure)
    const humedity = citydata.list.map(weather=> weather.main.humidity)
    const {lat,lon} = citydata.city.coord
   // console.log(temps)
        return(
            <tr key={citydata.city.id}>
                <td><GoogleMap lat={lat} lon={lon}/></td>
                <td><Chart data={temps} color="orange" units="C"/></td>
                <td><Chart data={pressure} color="red" units="hPa"/></td>
                <td><Chart data={humedity} color="blue" units="%"/></td>
            </tr>
        )
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Presure (hPa)</th>
                        <th>Humedity (%)</th>
                    </tr>
                </thead>
                <tbody>
                   {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
function mapStateToProps(state){     
    return{ weather: state.weather} 
}
export default connect(mapStateToProps)(WeatherList)

// or ({weater}) because weather = state.weather
// and weather