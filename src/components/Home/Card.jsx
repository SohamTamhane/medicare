import { Link } from 'react-router-dom';
import './Home.css';

function Card({image, name, role}){
    return(
        <div className='card-main-div'>
            <div className='card-img-div'>
                <img src={image} alt="soham_tamhane" className='card-img' />
            </div>
            <div className='card-heading'>{name}</div>
            <div className='card-role'> &lt; {role} /&gt;</div>
            <div className='card-btn-div'>
                <Link to={'https://www.linkedin.com/in/soham-tamhane-76623522b/'} className='primary-btn'>View Profile</Link>
            </div>
        </div>
    )
}
export default Card;