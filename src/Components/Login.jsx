import '../styles/Login.css'
import logo from '../assets/images/police-logo.png'

function Login() {
    return (
        <div className="login-container">
            <div className='login-card'>
                <img src={logo} alt='' />
                <h1>Login</h1>
                <p>Enter your email and password below</p>
                <label for='email'>EMAIL OR PHONE NUMBER</label>
                <input type={'text'} placeholder="Email or Phone" id='email'/> 
                <label for='password'>PASSWORD</label>
                <input type={'password'} placeholder="Email or Phone" id='password' />
                <button className='login-btn'>Sign in</button>
            </div>
        </div>
    );
}

export default Login;