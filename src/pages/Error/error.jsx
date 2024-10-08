import Nav from '@/composants/nav.jsx';
import Footer from '@/composants/footer.jsx';
import '@/pages/error/error.scss';

export default function Error() {
    return (
        <>
            <Nav />
            <div className="error">
                <h1 className="error__title">404</h1>
                <p className="error__text">Oups! La page que vous demandez n'existe pas.</p>
                <a className="error__link" href="/">Retourner sur la page d’accueil</a>
            </div>
            <Footer />
        </>
    )
}