import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function App() {
  const {i18n} = useTranslation();
  const language = i18n.language;  
  return (
    <>
      <Navbar />
      <div className='container-fluid'>
        <div className=' mt-5 mx-2 border border-dark p-3'>
      <Routes> 
      <Route path={`/${language}`} element={<Home />} />
      <Route path={`/${language}/home`} element={<Home />} />
      <Route path={`/${language}/about`} element={<About />} />
      <Route path={`/${language}/contact`} element={<Contact />} />
      <Route path="*" element={<Navigate to={`/${language}`}  />} />
      </Routes>
      </div>
      </div>
    </>
  )
}

export default App
