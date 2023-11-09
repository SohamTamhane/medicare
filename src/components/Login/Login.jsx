import "./Login.css";
import GoogleLogo from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase.js";
import { GoogleAuthProvider, getRedirectResult, signInWithRedirect } from 'firebase/auth';
import { useEffect } from "react";

function Login() {

    const navigate = useNavigate();

    async function signInWithGoogle() {
        try {
            await signInWithRedirect(auth, new GoogleAuthProvider());
        }
        catch (err) {
            console.log(err.message);
        }
    }

    useEffect(()=>{
        getRedirectResult(auth).then((result)=>{
            if(result){
                navigate('/medicare/dashboard');
            }
        });
    }, [])

    return (
        <div className="login-page-main-div">
            <div className="login-page-main-section">
                <div className="login-heading section-heading">Login</div>
                <div className="login-main-div">
                    <div className="login-with-google-btn-div">
                        <div onClick={signInWithGoogle} className="login-with-google">
                            <img src={GoogleLogo} className="google-logo" alt="google_logo" />
                            <div className="login-text">Continue with Google</div>
                        </div>
                    </div>
                    <div className="login-or">or</div>
                    <div className="login-with-email-center">
                        <div className="login-with-email-div">
                            <div className="login-text1">Login with Email</div>
                            <input className="input-field" type="text" placeholder="Email" /> <br />
                            <input className="input-field" type="text" placeholder="Password" />
                            <div className="login-btn-div">
                                <Link className='primary-btn'>Login</Link>
                            </div>
                        </div>
                    </div>
                    <div className="sign-up--link-text-div">Don't have an Account? <Link to={'/medicare/signup'} className="link-text">Sign Up</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Login;