import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Home = () => {
    const { t } = useTranslation();
    return (
        <div>
        <h1>{t('home.title')}</h1> 
        <p>{t('home.description')}</p>
      </div>        
    );
}

export default Home
