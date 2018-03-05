import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'
// Component
import Home from './components/home'
import Artist from './components/artist'

ReactDOM.render(
    <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/artist/:artistid" component={Artist}/>
            </div>
    </BrowserRouter>
    ,document.querySelector("#root"));

// ReactDOM.render(<App/>,document.getElementById("#root"));