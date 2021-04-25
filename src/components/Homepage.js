import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {selectSignedIn,setSignedIn,setUserData} from "../features/userSlice"
import "../styling/home.css"

const Homepage=()=>{
    const isSignedIn=useSelector(selectSignedIn)
    const dispatch=useDispatch();
    const login=(response)=>{
        console.log(response)
        dispatch(setSignedIn(true))
        dispatch(setUserData(response.profileObj))
    }

    return(
        <div className="home_page" style={{display:isSignedIn?"none":""}}>
            {isSignedIn?(
                <div className="login_message">
                    <h2>📗</h2>
                    <h1>Blogging and reading rediscovered!!</h1>
                    <p>Sign up to start reading our blogs!!</p>
                    <GoogleLogin 
                        clientId="641716272776-07u4s9apn88p60chrat6r1tn6kfvor0e.apps.googleusercontent.com" 
                        render={(renderProps)=>(
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="login_button">
                                Login With Google
                            </button>
                        )}
                        onSuccess={login}
                        onFailure={login}
                        isSignedIn={true}
                        cookiePolicy={"single_host_origin"}
                    />                    
                </div>
            ):(
                ""
            )}
        </div>
    )
}

export default Homepage