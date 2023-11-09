import './Home.css';
import Hero from "../../assets/hero1.png";
import DevImg from "../../assets/devImg.png";
import { Link, useNavigate } from 'react-router-dom';
import Card from './Card';
import { useContext, useEffect } from 'react';
import { Context } from '../../config/Context';

function Home(){

    const navigate = useNavigate();
    const {loginInfo} = useContext(Context);

    useEffect(()=>{
        if(loginInfo?.status===true){
            navigate('/dashboard');
        }
        else if(loginInfo?.status===false){
            navigate('/login');
        }
    }, [loginInfo])

    return(
        <div className="home-page-main-div">
            <div className="hero-section">
                <div className="hero-left-div">
                    <img src={Hero} className='hero-img1' alt="HeroImg" />
                </div>
                <div className="hero-right-div">
                    <div className='hero-heading'>
                        Keep Track of Your<br />Medicine with <span className='highlight-span'>MediCare</span>
                    </div>
                    <div className='hero-btn-div'>
                        <Link className='get-started-btn primary-btn'>Get Started</Link>
                    </div>
                </div>
            </div>

            {/* What is MediCare ? */}
            <div className='home-section'>
                <div className='section-heading'>
                    What is <span className='highlight-span'>MediCare</span>?
                </div>
                <div className='section-desc'>
                    Welcome to our MediCare! Seamlessly organize and track your home medication stock. Create personalized medication charts, receive timely notifications for updates, and ensure you never miss a dose. Take control of your health with our user-friendly app and website.
                </div>
            </div>

            {/* About Section */}
            <div className='home-section'>
                <div className='section-heading'>
                    <span className='highlight-span'>About</span> Us
                </div>
                <div className='section-desc'>
                    <Card image={DevImg} name="Soham Mahesh Tamhane" role="MERN Stack Developer"/>
                </div>
            </div>
        </div>
    )
}
export default Home;