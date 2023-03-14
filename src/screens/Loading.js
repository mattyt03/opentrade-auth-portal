import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

// add a loading animation
const Loading = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem('auth_portal_id');
    const institution = localStorage.getItem('auth_portal_institution');
    const [searchParams, setSearchParams] = useSearchParams();
    let code = searchParams.get('code');
    // code was automatically decoded, so we need to re-encode it
    code = encodeURIComponent(code);
    // console.log(code);
    let backend_url;
    switch (institution) {
        case 'TD Ameritrade':
            backend_url = `https://opentrade.herokuapp.com/auth_portals/${id}/tda_return?code=${code}`;
            break;
        case 'E*Trade':
            backend_url = `https://opentrade.herokuapp.com/auth_portals/${id}/etrade_return?code=${code}`;
            break;
        case 'Coinbase':
            backend_url = `https://opentrade.herokuapp.com/auth_portals/${id}/coinbase_return?code=${code}`;
            break;
      }

    fetch(backend_url, {
        method: 'GET'
    }
    ).then(res => {
        // console.log(res);
        return res.json();
    }).then(data => {
        if ('detail' in data) {
            throw Error(data['error']);
        }
        console.log(data);
        navigate(`/auth_portals/success/`);
    }).catch(err => {
        console.log(err.message);
    });
    
    return (
        <Card>
            {/* make a loading class*/}
            <div className='success'>
                <h1 className='success__h1'>Loading...</h1>
            </div>
        </Card>
     );
}
 
export default Loading;