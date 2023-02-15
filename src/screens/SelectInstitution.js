import { useParams } from 'react-router';
import Institution from '../components/Institution';
import { institutions_list } from '../data/institutions';
import Card from '../components/Card';
// should you create a separate page for mfa?
// you're gonna have to create pages for every error (invalid credentials, invalid 2fa, you have already linked this account, etc)


const SelectInstitution = () => {
    const { id } = useParams();
    const institutionItems = institutions_list.map((institution) => 
        <li><Institution
                name={institution.name}
                institution_link={institution.link}
                logo={institution.logo}
                id={id}
            />
        </li>
    );

    return (
        <Card>
            <h1 className='select_institution__h1'>Select your trading platform</h1>
            <ul className='institutions'>
                {institutionItems}
                <footer className='footer'>
                    <a href="#">Why is Opentrade involved?</a>
                </footer>
            </ul>
        </Card>
     );
}
 
export default SelectInstitution;