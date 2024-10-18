import './apropos.scss'
import Baniere from '../../composants/baniere';
import Menu from '../../composants/menu';

export default function Apropos() {
    return (
        <>
            <div className="main-apropos">
                <Baniere className="apropos" />
                <Menu titre="Fiabilité" />
                <Menu titre="Respect" />
                <Menu titre="Service" />
            </div>
        </>
    )
}