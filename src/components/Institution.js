import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Institution = ({name, institution_link, logo, id}) => {
    let login_url = `/auth_portals/${id}/login/?institution=${name}`;
    let external_redirect = false;
    if (name == 'TD Ameritrade') {
        login_url = `https://opentrade.herokuapp.com/auth_portals/${id}/redirect_to_tda`;
        external_redirect = true;
    } else if (name == 'E*Trade') {
        login_url = `https://opentrade.herokuapp.com/auth_portals/${id}/redirect_to_etrade`;
        external_redirect = true;
    }

    return ( 
        <div>
            {!external_redirect && <Link className='institution' to={login_url}>
                {/* Eventually switch to svg images */}
                <img src={logo} alt='' className='institution__logo' />
                <div className='institution__body'>
                    <h3 className='institution__name'>{name}</h3>
                    <p className='institution__link'>{institution_link}</p>
                </div>
                <div className='institution__chevron'>
                    <FontAwesomeIcon className='chevron' icon={faChevronRight}/>
                </div>
            </Link>}
            {external_redirect && <a className='institution' href={login_url}>
                {/* Eventually switch to svg images */}
                <img src={logo} alt='' className='institution__logo' />
                <div className='institution__body'>
                    <h3 className='institution__name'>{name}</h3>
                    <p className='institution__link'>{institution_link}</p>
                </div>
                <div className='institution__chevron'>
                    <FontAwesomeIcon className='chevron' icon={faChevronRight}/>
                </div>
            </a>}
        </div>
        );
}
 
export default Institution;