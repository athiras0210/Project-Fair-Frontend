import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import {Navigate} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
     <Header />
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'login'} element={<Auth/>}/>
        <Route path={'register'} element={<Auth register/>}/>
        <Route path={'dashboard'} element={<Dashboard/>}/>
        <Route path={'Projects'} element={<Projects/>}/>
        <Route path={'*'} element={<Navigate to={'/'}/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
