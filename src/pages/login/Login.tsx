import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import "./login.css";
import { BtnPrimary } from "../../components";

const Login = () => {
  return (
    <div className='login'>
      <div className='top'>
        <Link to={"/"}>
          <FaXmark size={24} color='#313f47' />
        </Link>
        <BtnPrimary
          title='SIGN UP'
          bgcolor='#131f24'
          textColor='#49c0f8'
          shadow='#313f47'
          hover=''
          to='/register'
          bordercolor='#313f47'
        />
      </div>
      <div className='loginForm'>
        <h1>Log in</h1>

        <form className='form'>
          <input
            type='text'
            placeholder='Email or username'
            className='formInput'
          />
          <input type='password' placeholder='Password' className='formInput' />
        </form>
        <div className='btnloginconatiner'>
          <BtnPrimary
            title='LOG IN'
            bgcolor='#49c0f8'
            textColor='#131f24'
            shadow='#1aa8eb'
            hover='#50d3ff'
            to='/dashboard'
            bordercolor='#49c0f8'
          />
        </div>
        <div className='formOr'>
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className='btncontainer'>
          <BtnPrimary
            title='FACEBOOK'
            bgcolor='#131f24'
            textColor='#49c0f8'
            shadow='#313f47'
            hover=''
            to='/facebook-login'
            bordercolor='#313f47'
          />
          <BtnPrimary
            title='GOOGLE'
            bgcolor='#131f24'
            textColor='#49c0f8'
            shadow='#313f47'
            hover=''
            to='/google-login'
            bordercolor='#313f47'
          />
        </div>
        <p className='terms'>
          By signing in to Duolingo, you agree to our Terms and
          <a href='/privacy-policy'>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Login;
