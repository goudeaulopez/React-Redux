import React from 'react'
import CarList from './carList'
import CarDetails from './carDetails'
import Navegator from '../components/navegator'

import '../styles/app.css'

const App = () => {
    return(
          <div className="app">
            <div id="navegator">
               <Navegator/>
            </div>
            <br/><br/><br/>
            <div className="ui container grid">
                   <div className="ui row">
                        <div className="column twelve wide">
                            <CarDetails/>
                        </div>
                        <div id="carlist" className="column four wide">
                         
                             <CarList/>
                        </div>
                   </div>
             </div>
          </div>
    )
}
export default App
