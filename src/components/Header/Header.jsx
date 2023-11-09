import './Header.css';
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../config/Context';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

function Header(){

    const {loginInfo} = useContext(Context);
    const navigate = useNavigate();

    async function logoutFunc(){
        try{
            await signOut(auth).then(()=>{
                navigate('/login');
            }).catch((error)=>{
                console.log(error);
            })
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <div className='header-main-div'>
            <Link to={'/'} className='header-left-div'>
                <img src={Logo} alt="Logo" className='header-logo'/>
                <span className='header-company-name'>MediCare</span>
            </Link>
            <div className='header-right-div'>
                {
                    loginInfo?.status ?
                        <div onClick={logoutFunc} className='primary-btn'>Logout</div>
                    : 
                        <Link to={'/login'} className='primary-btn'>Login</Link>
                }
            </div>
        </div>            
    )
}
export default Header;