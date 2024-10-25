import './apropos.scss'
import Baniere from '../../composants/baniere';
import Menu from '../../composants/menu';



export default function Apropos() {
    const menus = [
        { titre: "Fiabilité", decription: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulierment verifiées par nos équipes." },
        { titre: "Respect", decription: "La bienveillance fait partie des valeurs fondatriques de Kasa. Tout comportement discriminant ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { titre: "Service", decription: "La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance." },
        { titre: "Sécurité", decription: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." },
    ];
    return (
        <>
            <div className="main-apropos">
                <Baniere className="apropos" />
                <div className="container">
                    {menus.map((menu, index) => (
                        <Menu key={index} titre={menu.titre} decription={menu.decription} />
                    ))}
                </div>
            </div>
        </>
    )
}