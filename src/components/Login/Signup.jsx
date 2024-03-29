import "./Login.css";
import GoogleLogo from "../../assets/google.png";
import { Link, useNavigate } from "react-router-dom";
import {auth, googleProvider } from "../../config/firebase.js";
import {GoogleAuthProvider, getRedirectResult, signInWithRedirect} from 'firebase/auth';
import { useContext, useEffect } from "react";
import { Context } from "../../config/Context.js";

function Signup(){

    const navigate = useNavigate();
    const {setLoginInfo} = useContext(Context);

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
                setLoginInfo({status: true, user: result.user});
                navigate('/dashboard');
            }
        });
    }, [])

    return(
        <div className="login-page-main-div">
            <div className="login-page-main-section">
                <div className="login-heading section-heading">Sign Up</div>
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
                            <div className="login-text1">Sign up with Email</div>
                            <input className="input-field" type="text" placeholder="Name"/> <br />
                            <input className="input-field" type="text" placeholder="Email"/> <br />
                            <input className="input-field" type="text" placeholder="Password"/>
                            <div className="login-btn-div">
                                <button className='primary-btn'>Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="sign-up--link-text-div">Already have an Account? <Link to={'/login'} className="link-text">Login</Link></div>
                </div>
            </div>
        </div>
    )
}
export default Signup;