import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Departments from './components/Departments/Departments';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import Shipping from './components/shipping/Shipping';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Homepage></Homepage>
            </Route>
            <Route path="/home">
              <Homepage></Homepage>
            </Route>
            <Route path="/departments">
              <Departments></Departments>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
