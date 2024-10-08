import './apropos.scss'
import Nav from '@/composants/nav.jsx';
import Footer from '@/composants/footer.jsx';
import Baniere from '../../composants/baniere';

export default function Apropos() {
    return (
        <>
            <Nav />
            <Baniere className="apropos" />
            <Footer />
            
        </>
    )
}