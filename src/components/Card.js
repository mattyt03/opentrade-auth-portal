import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    return ( 
        <div className='card'>
            <nav className='navbar'>
                <button class='icon-button' onClick={() => {navigate(-1)}}>
                    <FontAwesomeIcon className='navbar-icon' icon={faArrowLeft}/>
                </button>
                <h1 className='opentrade'>opentrade</h1>
                <FontAwesomeIcon className='navbar-icon' icon={faXmark}/>
            </nav>
            {props.children}
        </div>
     );
}
 
export default Card;