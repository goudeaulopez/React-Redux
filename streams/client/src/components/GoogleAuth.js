import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component{
   // state={isSignedIn:null}

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'61485187771-h8eli7s7ekiqrurnqur4m3nhfgbivlqj.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
               // this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
        })
    })
}
onAuthChange = isSignedIn => {
    
    if(isSignedIn){
        this.props.signIn(this.auth.currentUser.get().getId());
    }else{
        this.props.signOut();
    }
}
onSignInClick = () => {
    this.auth.signIn();
}
onSignOutClick = () => {
    this.auth.signOut();
}
renderAuthButton(){
   // if(this.state.isSignedIn === null){
      //  return <div>I dont know if we are signid in</div>
      if(this.props.isSignedIn === null){
      return null
    } else if(this.props.isSignedIn){   // else if(this.state.isSignedIn){
  
      //  return <div>I am signed in</div>
     // console.log(this.state.isSignedIn)
        return(
            <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon"></i>
                Sign Out
            </button>
        )
    }
    else{
       // return <div>I m not signed in</div>
       return(
        <button onClick={this.onSignInClick} className="ui red google button">
        <i className="google icon"></i>
        Sign In
        </button>
       )
    }
}
render(){
    return <div>{this.renderAuthButton()}</div>
    }
}
const mapStateToProps = state =>{
    return{ isSignedIn: state.auth.isSignedIn}
}
export default connect(  mapStateToProps , { signIn, signOut })(GoogleAuth)

//this.setState({isSignedIn: this.auth.isSignedIn.get()})