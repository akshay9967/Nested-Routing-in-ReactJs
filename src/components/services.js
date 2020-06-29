import React from 'react';
import { Route, Link,Switch } from 'react-router-dom'

function Services({match}){
    console.log("lkl",match.url);
    return(
        <div className="container jumbotron mt-4">
            <div>
                <h2>Service component</h2>
                <ul>
                    <li><Link to={`${match.url}/1`}>service 1</Link></li>
                    <li><Link to={`${match.url}/2`}>service 2</Link></li>
                </ul>
                <Switch>
                    <Route path={`${match.url}/1`} component={first}></Route>
                    <Route path={`${match.url}/2`}  component={second}></Route>

                </Switch>
            </div>
        </div>

    )
}

function first({match}){
    console.log("jj",match.url)
    return(
        <h2>First component is here</h2>
    )
}

function second(){
    return(
        <h2>second component is here</h2>
    )
}


export default Services;