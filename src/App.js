import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './screens/Welcome';
import SelectInstitution from './screens/SelectInstitution';
import Login from './screens/Login';
import Success from './screens/Success';
import Loading from './screens/Loading';

function App() {

  return (
    // remove "auth_portals" from paths?
    <Router>
      <Routes>
        <Route path="/auth_portals/:id" element={<Welcome/>} />
        <Route path="/auth_portals/:id/select_institution/" element={<SelectInstitution/>} />
        <Route path="/auth_portals/:id/login/" element={<Login/>} />
        {/* <Route path="/auth_portals/:id/success/" element={<Success/>} /> */}
        <Route path="/auth_portals/loading" element={<Loading/>} />
        <Route path="/auth_portals/success/" element={<Success/>} />
      </Routes>
    </Router>
  );
}

export default App;
