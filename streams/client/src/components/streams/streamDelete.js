import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../modal'
import history from '../../history'
import {fetchStream, deleteStream} from '../../actions'

class StreamDelete extends React.Component{
    componentDidMount(){
       // console.log(this.props)
      // this.props.match.params.id
      this.props.fetchStream(this.props.match.params.id)
    }

    renderActions(){
      //  const id = this.props.match.params.id;   or
      const {id} = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={()=>{
                    this.props.deleteStream(id)
                }}  className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }
    /* before 285
    renderActions(){
        return (
            <React.Fragment>
                <button className="ui button negative">Delete</button>
                <button className="ui button">Cancel</button>
            </React.Fragment>
        )
    }

 */

    renderContent(){
        if(!this.props.stream){
            return 'Are you sure you want to delete this stream'
        }
         return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`
    }
    render(){
            return  <Modal
                        title="Delete Stream"
                        content={this.renderContent()}
                        actions={this.renderActions()}
                        onDismiss={()=>history.push('/')}
                    />
               
            
        }
}
const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream, deleteStream}) (StreamDelete)

/*before 283
import React from 'react'
import Modal from '../modal'
import history from '../../history'

const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    )
    return(
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream?"
                actions={actions}
                onDismiss={()=>history.push('/')}
            />
        </div>
    )
}
export default StreamDelete


*/