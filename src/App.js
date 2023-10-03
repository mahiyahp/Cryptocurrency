import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import HomePage from './components/homePage/homePage';
import Footer from './components/footer/footer';


function App() {
  return (
    <div className='app'>
        <Navbar/>
      <div className='allComponents'>
    
        <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>  

     <Footer/>
      </div>
    </div>
  );
}

export default App;



