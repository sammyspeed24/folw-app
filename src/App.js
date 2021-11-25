import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.css'
import './App.css';
import CustomNavbar from './Components/Navbar';
import AboutPage from './Components/About';
import Gallery from './Components/Gallery';
import Home from './Components/Home';
import ServicePage from './Components/ServiceDay';
import Testimony from './Components/Testimony';

import ContactPage from './Components/Contact';
import ConnectPage from './Components/Connect';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import GivePaymentPage from './Components/Give';
import SendRequest from './Components/SendRequest';
import FlipCard from "./Components/FlipCard"
import ScrollToTop from './Components/ScrollToTOp';
import ScrollTopButton from './Components/ScrollTopButton';
import { SendUsMsg } from './Components/SendUsMsg';
import DepartmentsPage from './Components/Departments';
import FolwContruction from './Components/FolwContruction';
import  "./Components/ScrollToTop.css";

function App() {
  return (
<Router>
  <ScrollToTop />
  <ScrollTopButton />

    <div className="App">
    
    <CustomNavbar />
  
    
      

<Switch>
  <Route exact path="/" component={Home} />
   <Route exact path="/about" component={AboutPage} />
    <Route exact path="/contact" component={ContactPage} />
    <Route exact path="/connect/3.1" component={ConnectPage} />
      
    <Route exact path="/DepartmentsPage/3.2" component={DepartmentsPage} />
    <Route exact path="/gallery/3.3" component={Gallery} />
      <Route exact path="/giving/3.4" component={GivePaymentPage} />
      <Route exact path="/testimonies/3.5" component={Testimony} />  
   
      <Route exact path="/service" component={ServicePage} />
    
    
      <Route exact path="/request" component={SendRequest} />
      <Route exact path="/flipcard" component={FlipCard} />
      <Route exact path="/sendmessage" component={SendUsMsg} />  
      <Route exact path="/donate" component={FolwContruction} />   
     
  </Switch>


    </div>
    </Router>


  );
}

export default App;
