import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={term:''}
        this.onInputChange=this.onInputChange.bind(this)
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }
    onInputChange(event){
       // console.log(event.target.value)
        this.setState({term: event.target.value})
    }
    onFormSubmit(event){
        event.preventDefault()
        this.props.fetchWeather(this.state.term)
        this.setState({term:''})
       
    }
    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="enter a city to display 5 days forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">search</button>
                 </span>
            </form>
        </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather},dispatch)
}
export default connect(null,mapDispatchToProps)(SearchBar)