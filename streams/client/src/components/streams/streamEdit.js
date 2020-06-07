import React from 'react'
import {connect} from 'react-redux'
import { fetchStream, editStream} from '../../actions'
import StreamForm from './streamForm'
import _ from 'lodash'

const TitleButton="Edit"

class StreamEdit extends React.Component{
    componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);  
    }
    onSubmit = formValues => {
        //console.log(formValues)
        this.props.editStream(this.props.match.params.id,formValues);
        
    }
    render(){
        if(!this.props.stream){
            return <div>loading!</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm 
                    onSubmit={this.onSubmit} 
                   // initialValues={this.props.stream}
                    initialValues={_.pick(this.props.stream,'title','description')}
                   // initialValues={{title:'Edit me', description: 'describe me'}}
                   create={TitleButton}
                />
            </div>
        )
    }
}
const mapStatetoProps = (state , ownProps) => {
    //console.log(ownProps)
    return{ stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStatetoProps, {fetchStream, editStream}) (StreamEdit)








/* before 271
import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'

class StreamEdit extends React.Component{
    componentDidMount(){
      this.props.fetchStream(this.props.match.params.id);  
    }
    render(){
        if(!this.props.stream){
            return <div>loading!</div>
        }
        return (
            <div>
                <div>{this.props.stream.title}</div>
            </div>
        )
    }
}
const mapStatetoProps = (state , ownProps) => {
    //console.log(ownProps)
    return{ stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStatetoProps, {fetchStream}) (StreamEdit)
*/

/* 268 
const StreamEdit = (props) => {
    //console.log(props)
    return (
        <div>
            <div>StreamEdit</div>
        </div>
    )
}
const mapStatetoProps = (state , ownProps) => {
    //console.log(ownProps)
    return{ stream: state.streams[ownProps.match.params.id] }
}
export default connect(mapStatetoProps) (StreamEdit)

*/