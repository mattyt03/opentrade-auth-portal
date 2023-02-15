import Card from '../components/Card';

const Success = () => {
    return (
        <Card>
            <div className='success'>
                <h1 className='success__h1'>Success!</h1>
                <p className='success-message'>Your account has been successfully linked this application.</p>
            </div>
        </Card>
     );
}
 
export default Success;