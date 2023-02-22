
import './App.css';
import './bootstrap.min.css'
import Header from './components/Header';
import Frontpage from './components/Frontpage'
import Footer from './components/Footer';
import Mens from './components/Mens';
import Womens from './components/Womens'
import Kids from './components/Kids'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Appp from './components/Appp';

function App() {
  return (
    <div className="App">
      
<Header></Header>  <br/>

<Router>

<Routes>
<Route path='/login' element={<Frontpage/>}/>

    <Route path='/mens' element={<Mens/>}/>
    <Route path='/womens' element={<Womens/>}/>
    <Route path='/kids' element={<Kids/>}/>
    <Route path='/contactus' element={<Contact/>}/>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/store' element={<Appp/>}/>





</Routes>

</Router>
<Footer></Footer>


 </div>
  );
}

export default App;
