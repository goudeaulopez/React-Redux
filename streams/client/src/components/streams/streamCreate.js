
import React from 'react'
import { connect } from 'react-redux'
import { createStream } from '../../actions';
import StreamForm from './streamForm'

const TitleButton="Create"

class StreamCreate extends React.Component{
    onSubmit = formValues => {
        this.props.createStream(formValues)
    }

    render(){
        return(
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} create={TitleButton}/>
            </div>
        )
     }
}

export default connect(null,{createStream})(StreamCreate)





/* before 270

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStream } from '../../actions';
*/

/* before 270 
    class StreamCreate extends React.Component{
/*
 //renderInput(formProps){
     //console.log(formProps)
   //  return <input {...formProps.input}/> or
 /*  return <input 
              onChange={formProps.input.onChange} 
              value={formProps.input.value}
              />  */
/* before 270 
renderError({ error, touched }){
    if (touched && error){
        return(
            <div className="ui error message">
                <div className="header">{error}</div>
            </div>
        )
    }
}
renderInput = ({ input, label, meta}) =>{
   // console.log(meta)
   const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return(
            <div className="className">
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
 }

 */
 // <div>{meta.error}</div>
 /* before 270 
 onSubmit = formValues => {
     */
    //console.log(formValues)

    /* before 270 
    this.props.createStream(formValues)
 }
  render(){   */
     // console.log(this.props)
      /* before 270 
      return(
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
              <Field name="title" 
                    component={this.renderInput} 
                    label="Enter Title"/>
              <Field name="description" 
                    component={this.renderInput} 
                    label="Enter Description"/><br/>
              <button className="ui button primary">onSubmit</button>
          </form>
             
      )
  }
}

const validate= formValues =>{
    const error = {}
    if(!formValues.title){
        error.title = 'You must enter a title'
    }
    if(!formValues.description){
        error.description = 'You must enter a description'
    }
    return error;
} */

/*
export default reduxForm( {
       form: 'streamCreate',
       validate
   }) (StreamCreate)
   */
/* 
  one way to bind connect  

  export default connect() (reduxForm( {
    form: 'streamCreate',
    validate
}) (StreamCreate))

*/

// the best way
   /* before 270 
const formWrapper = reduxForm({
    form: 'streamCreate',
    validate
}) (StreamCreate);

export default connect(null, {createStream})(formWrapper)

*/