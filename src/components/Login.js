import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import '../css/Login.css';
import {auth} from "../firebase";

const Login = () => {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) =>{
                history.push("/");
            })
            .catch((error) => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth){
                    history.push("/");
                }
            })
            .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG1.png" alt=""/>
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the Amazon Condition of Use & Sale.
                    Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.
                </p>
                <button className="login__registerButton" onClick={register}>Create an Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;