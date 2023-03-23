import './App.css';
import Body from './body/dashboard';
import Header from './Header';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import AllRoutes from './body/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const postData = async () => {
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        username: 'admin',
        password: '123',
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Fragment>
      <Header />
      <div>
        <h1>My Component</h1>
        <button onClick={postData}>Submit</button>
      </div>
      <Routes>
        {AllRoutes.map((route, index) => {
          return <Route
            key={index}
            path={route.path}
            element={<route.component />}
          />
        })
        }
      </Routes>
    </Fragment>

  );
}

export default App;
