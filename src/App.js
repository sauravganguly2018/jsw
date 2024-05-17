import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Landing from './Pages/Landing/Landing';
import './App.css';
import './Variables.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </Provider>
  );
}

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   // Check if user is authenticated, if not redirect to login
//   const isLoggedIn = store.getState().isLoggedIn;
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isLoggedIn ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

export default App;
