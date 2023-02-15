import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// shield check is a premium icon
import { faXmark, faLink} from '@fortawesome/free-solid-svg-icons';
import { faShieldCheck } from '@fortawesome/pro-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return ( 
        <div className='card'>
            <nav className='welcome-navbar'>
                <FontAwesomeIcon className='navbar-icon' icon={faXmark}/>
            </nav>
            <div className='welcome'>
                <div className='welcome-content'>
                    <h1 className='welcome__h1'>This application uses <b>Opentrade</b> to connect to your trading account</h1>
                    <div className='checklist-item'>
                        <FontAwesomeIcon className='checklist-icon' icon={faLink}/>
                        <div className='checklist-body'>
                            <h2 className='welcome__h2' >Connect effortlessly</h2>
                            <p>Opentrade lets you securely connect your trading accounts in seconds</p>
                        </div>
                    </div>
                    <div className='checklist-item'>
                        <FontAwesomeIcon className='checklist-icon' icon={faShieldCheck}/>
                        <div className='checklist-body'>
                            <h2 className='welcome__h2'>Your data belongs to you</h2>
                            <p>Opentrade doesn't sell personal info, and will only use it with your permission</p>
                        </div>
                    </div>
                </div>
                <button class='button' onClick={() => {navigate(`/auth_portals/${id}/select_institution`)}}>Continue</button>
            </div>
        </div>
     );
}
 
export default Welcome;