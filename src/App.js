import './App.css';
import Body from './body/dashboard';
import Header from './Header';
import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import AllRoutes from './body/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {



  return (
    <Fragment>
      <Header />
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
