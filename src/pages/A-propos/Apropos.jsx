import './apropos.scss'
import Nav from '@/composants/nav.jsx';
import Footer from '@/composants/footer.jsx';
import Baniere from '../../composants/baniere';
import Menu from '../../composants/menu';

export default function Apropos() {
    return (
        <>
            <Nav />
            <Baniere className="apropos" />
            <Menu titre="Fiabilité" />
            <Menu titre="Respect" />
            <Menu titre="Service" />
            <Footer />
        </>
    )
}