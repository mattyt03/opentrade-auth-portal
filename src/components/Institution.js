import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Institution = ({ name, institution_link, logo, id }) => {
  let loginUrl;
  let externalRedirect = true;

  switch (name) {
    case 'TD Ameritrade':
      loginUrl = `https://opentrade.herokuapp.com/auth_portals/${id}/redirect_to_tda`;
      break;
    case 'E*Trade':
      loginUrl = `https://opentrade.herokuapp.com/auth_portals/${id}/redirect_to_etrade`;
      break;
    case 'Coinbase':
      loginUrl = `https://opentrade.herokuapp.com/auth_portals/${id}/redirect_to_coinbase`;
      break;
    default:
      loginUrl = `/auth_portals/${id}/login/?institution=${name}`;
      externalRedirect = false;
      break;
  }

  const updateInstitution = () => {
    localStorage.setItem('auth_portal_institution', name);
  }

  const InstitutionLink = externalRedirect ? 'a' : Link;

  return (
    <InstitutionLink onClick = {updateInstitution} className='institution' to={loginUrl} href={loginUrl}>
      {/* Eventually switch to svg images */}
      <img src={logo} alt='' className='institution__logo' />
      <div className='institution__body'>
        <h3 className='institution__name'>{name}</h3>
        <p className='institution__link'>{institution_link}</p>
      </div>
      <div className='institution__chevron'>
        <FontAwesomeIcon className='chevron' icon={faChevronRight} />
      </div>
    </InstitutionLink>
  );
};

export default Institution;