import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from './Componnets/LoginComponent';
import Home from './Componnets/Home';

function App() {
  return (
    <div className="">
        <BrowserRouter>  
          <Route exact path = '/' component = {LoginComponent}/>
          <Route  path ='/home' component={Home} />
          <Route  path ='/home/dashboard' />
          <Route  path ='/home/profile' />   
          <Route path= '/home/account'/>
          <Route path= '/'/>
    </BrowserRouter>
    </div>
  
  );
}

export default App;
