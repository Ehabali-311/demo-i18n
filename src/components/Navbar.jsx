import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
   const { t, i18n } = useTranslation();
   const language = i18n.language;
   const location = useLocation();  
  const navigate = useNavigate();
   const toggleLanguage = () => {
     const newLanguage = language === 'en' ? 'ar' : 'en';
     const currentPath = location.pathname;  
     const newPath = currentPath.replace(`/${language}/`, `/${newLanguage}/`);
     i18n.changeLanguage(newLanguage); 
     navigate(newPath);
   };
   useEffect(() => {
    const direction = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', direction);
  }, [language]);
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
      <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={`/${language}/home`}>{t('navbar.home')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${language}/about`}>{t('navbar.about')}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/${language}/contact`}>{t('navbar.contact')}</Link>
            </li>
      </ul>
    <button className='btn btn-primary' onClick={toggleLanguage}>{language === 'en' ? 'العربية' : 'English'}</button>
    </div>
  </div>
</nav>
  )
}

export default Navbar
