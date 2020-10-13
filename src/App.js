import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import {auth} from "./firebase";
import {useStateValue} from "./contexts/StateProvider";

function App() {
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            // console.log('THE USER IS >>> ', authUser);

            if (authUser) {
                console.log("The user is logged in");
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })
            } else {
                console.log("The user is logged out");
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    },[user]);

    return (
        <Router>
            <div className="app">
                <Header/>
                <Switch>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/checkout">
                        <Checkout/>
                    </Route>
                    <Route path="/payment">
                        <h1>payment</h1>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
