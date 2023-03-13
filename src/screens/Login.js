import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../components/Card';
import { institution_data } from '../data/institutions';

const Login = () => {
    const { id } = useParams();
    // getting the query params takes an extra step
    // use local storage instead?
    const [searchParams, setSearchParams] = useSearchParams();
    const institution = searchParams.get('institution');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayMFAInput, setDisplayMFAInput] = useState(false);
    const [MFACode, setMFACode] = useState('');
    const [deviceToken, setDeviceToken] = useState('');
    const navigate = useNavigate();
    const institution_logo = institution_data[institution]['logo'];
    const button_color = institution_data[institution]['button_color'];

    const handleSubmit = e => {
        // they removed the prevent default and added a finally
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        if (displayMFAInput === false) {
            // don't hardcode urls
            // http://127.0.0.1:8000
            fetch(`https://opentrade.herokuapp.com/auth_portals/${id}/login`, {
                method: 'POST',
                body: formData
            }).then(res => {
                // console.log(res);
                // res.json() is also async (returns a promise object)
                return res.json();
            }).then(data => {
                // console.log(data);
                // the backend should be handling all the errors
                // what if the response has detail but it isn't an error?
                if ('detail' in data) {
                    throw Error(data['error']);
                }
                setDisplayMFAInput(true);
                setDeviceToken(data['device_token'])
            }).catch(err => {
                // for now just do a console.log
                console.log(err.message);
            });
        // add .catch()
        } else {
            formData.append('mfa_code', MFACode);
            formData.append('device_token', deviceToken);
            // https://opentrade.herokuapp.com
            fetch(`https://opentrade.herokuapp.com/auth_portals/${id}/mfa`, {
                method: 'POST',
                body: formData
            }).then(res => {
                // console.log(res);
                return res.json();
            }).then(data => {
                // console.log(data);
                if ('detail' in data) {
                    throw Error(data['error']);
                }
                navigate(`/auth_portals/${id}/success/`);
            }).catch(err => {
                console.log(err.message);
            });
        }
        
    }

    return (
        <Card>
            <form action='' className='login'>
                <img className='login__logo' src={institution_logo} alt="" />
                <h1 class='login__h1'>Log in to {institution}</h1>
                <p class='login-text'>By providing your credentials, you're enabling Opentrade to retrieve your investment data.</p>
                <input
                    className='input-field'
                    required
                    type='email'
                    id='email'
                    placeholder='Email Address'
                    // name?
                    value={email}
                    // review onChange
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    className='input-field'
                    required
                    type='password' 
                    id='password'
                    placeholder='Password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {displayMFAInput && <input 
                    className='input-field'
                    required
                    type='text' 
                    id='smsCode'
                    placeholder='SMS Code'
                    value={MFACode}
                    onChange={e => setMFACode(e.target.value)}
                    />}
                <button className='button' style={{background: button_color}} onClick={ handleSubmit }>Submit</button>
                <a href='#' class='forgot-password'>Forgot your password?</a>
            </form>
        </Card>
     );
}
 
export default Login;