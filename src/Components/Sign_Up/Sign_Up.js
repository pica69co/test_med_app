import React from 'react'
import './Sign_Up.css';

const Sign_Up = () => {
  return (
    <div className="container" style={{marginTop: '5%'}}> 
    {/* <!-- Main container with margin-top --> */}
        <div className="signup-grid"> 
        {/* <!-- Grid layout for sign-up form --> */}
            <div className="signup-text"> 
            {/* <!-- Title for the sign-up form --> */}
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style={{textAlign: 'left'}}> 
            {/* <!-- Text for existing members to log in --> */}
                Already a member? <span><a href="../Login/Login.html" style={{color: '#2190FF'}}> Login</a></span>
            </div>
            <div className="signup-form"> 
            {/* <!-- Form for user sign-up --> */}
                <form> 
                    {/* <!-- Start of the form --> */}

                    <div className="form-group"> 
                    {/* <!-- Form group for user's name --> */}
                        <label for="name">Name</label> 
                        {/* <!-- Label for name input field --> */}
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" /> 
                        {/* <!-- Text input field for name --> */}
                    </div>

                    <div className="form-group"> 
                    {/* <!-- Form group for user's phone number --> */}
                        <label for="phone">Phone</label> 
                        {/* <!-- Label for phone input field --> */}
                        <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="helpId" pattern="\d{10}" 
                        maxlength="10"  /> 
                        {/* <!-- Tel input field for phone number --> */}
                    </div>

                    <div className="form-group"> 
                    {/* <!-- Form group for user's email --> */}
                        <label for="email">Email</label> 
                        {/* <!-- Label for email input field --> */}
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" /> 
                        {/* <!-- Email input field --> */}
                    </div>

                    <div className="form-group"> 
                    {/* <!-- Form group for user's password --> */}
                        <label for="password">Password</label> 
                        {/* <!-- Label for password input field --> */}
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" /> 
                        {/* <!-- Password input field --> */}
                    </div>

                    <div className="btn-group"> 
                    {/* <!-- Button group for form submission and reset --> */}
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light"> Submit </button> 
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light"> Reset
                        </button>                    
                    </div>
                </form> 
                {/* <!-- End of the form --> */}
            </div>
        </div>
    </div>
  )
}

export default Sign_Up;