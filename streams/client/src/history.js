

 import * as createHistory from "history";

/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 *
 */
const history = createHistory.createBrowserHistory();

export default history;



/*
import createHistory from 'history/createBrowserHistory'
//import require("history").createBrowserHistory

 //require("history").createBrowserHistory
 export default createHistory()


*/