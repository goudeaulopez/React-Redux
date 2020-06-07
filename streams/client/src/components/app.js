import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import StreamCreate from '../components/streams/streamCreate'
import StreamDelete from '../components/streams/streamDelete'
import StreamEdit from '../components/streams/streamEdit'
import StreamList from '../components/streams/streamList'
import StreamShow from '../components/streams/streamShow'
import Header from '../components/header'
import history from '../history'

const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
              <div>
                <Header/> 
                <Switch>
                    <Route  path="/"   exact      component={StreamList}/>
                    <Route  path="/streams/new"   component={StreamCreate}/>
                    <Route  path="/streams/edit/:id"  component={StreamEdit}/>
                    <Route  path="/streams/delete/:id"component={StreamDelete}/>
                    <Route  path="/streams/:id"  component={StreamShow}/>
                </Switch>
              </div>  
            </Router>
        </div>
    )
}
export default App

/*
//import {BrowserRouter,Route} from 'react-router-dom'
<BrowserRouter history={history}>
              <div>
                <Header/> 
                <Route  path="/"   exact      component={StreamList}/>
                <Route  path="/streams/new"   component={StreamCreate}/>
                <Route  path="/streams/edit"  component={StreamEdit}/>
                <Route  path="/streams/delete"component={StreamDelete}/>
                <Route  path="/streams/show"  component={StreamShow}/>
              </div>  
            </BrowserRouter>

*/




//MemoryRouter
//HashRouter
/*
const page1 = () => {
    return <div>page1  <Link to="/page2">gopage2</Link></div>
}
const page2 = () => {
    return <div>page2  <Link to="/">gopage1</Link></div>
}


const App = () => {
    return(
        <div>
           <BrowserRouter>
                <div>
                    <Route path="/" exact component={page1}/>
                    <Route path="/page2" component={page2}/>
                </div>
          </BrowserRouter>
       </div>
    )
}
export default App
*/

/*
   <MemoryRouter>
                  <div>
                    <Route path="/" exact component={page1}/>
                    <Route path="/page2" component={page2}/>
                </div>
           </MemoryRouter>
 
   <HashRouter>
                  <div>
                    <Route path="/" exact component={page1}/>
                    <Route path="/page2" component={page2}/>
                </div>
   </HashRouter>

*/




/*

const App = () => {
    return <div>App </div>
}
export default App

*/
