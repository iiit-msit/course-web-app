import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'

export default class welcome extends Component {

    constructor(props) {
        super()
        this.state={
            redirected: false
        }
        this.signup = this.signup.bind(this)
    }

    signup(res, type){

    }




    render() {

        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, google)
          }

        return (
            <div>
                welcome..!

                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}
