import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Card from '../components/Card';

// add a loading animation
const Loading = () => {
    const navigate = useNavigate();
    const id = localStorage.getItem('auth_portal_id');
    const [searchParams, setSearchParams] = useSearchParams();
    let code = searchParams.get('code');
    // code was automatically decoded, so we need to re-encode it
    code = encodeURI(code);
    console.log(code);

    fetch(`https://opentrade.herokuapp.com/auth_portals/${id}/tda_return?code=${code}`, {
        method: 'GET'
    }
    ).then(res => {
        // console.log(res);
        return res.json();
    }).then(data => {
        // console.log(data);
        if ('detail' in data) {
            throw Error(data['error']);
        }
        navigate(`/auth_portals/success/`);
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